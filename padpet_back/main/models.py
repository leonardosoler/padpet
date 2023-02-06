from django.db import models, transaction
from main.utils import i_print
from django.contrib.auth.models import User,Group
# Create your models here.



class StateMachineModel(models.Model):
    class InvalidStateTransition(Exception):
        """ Easy to understand naming conventions work best! """
        pass
    

    DRAFT = 'DRAFT'

    id = models.AutoField(primary_key=True)
    # TODO: Limitar corretamente nas classes filhas
    STATUS_CHOICES = (
        (DRAFT, ('DRAFT')),
        (0, ('Initial')),
        (1, ('Default')),
        (2, ('Final')),
    )

    # TODO: Verificar se o self. resolve
    status = models.CharField(choices=STATUS_CHOICES, default=DRAFT, max_length=40, blank=False, null=False,
                              verbose_name=("Estado do Objeto"), help_text=(""))

    # TODO: Mudar autor para outro nome para nao confundir
    author = models.ForeignKey(User, verbose_name=("Autor"), blank=True, null=True, on_delete=models.CASCADE)

    #data da criacao do objeto -- versao em producao nao deve ter problemas, mas registros antigos nossos de teste
    #estao com esse campo errado, pois mostra a data da criacao do campo (14/05/18) e nao do objeto
    creation_date = models.DateTimeField(auto_now_add=True, verbose_name=("Data da Criação"),
                                             help_text=("Data quando a ANP ou o Declarante criaram este item"))
    # data desta alteração
    modification_date = models.DateTimeField(auto_now=True, verbose_name=("Data da Atualização"),
                                             help_text=("Data quando a ANP ou o Declarante alterou este item"))

    # function to check if the value is in status_choices
    # TODO: make check_status generic again
    check_status = lambda self: len(
        filter(lambda status_choices_element: status_choices_element[0] == self.status, self.STATUS_CHOICES)) > 0

    previous = models.ForeignKey('self', related_name='+', null=True, blank=True, verbose_name=("Fase Anterior"),
                                 help_text=(""), on_delete=models.CASCADE)
    next = models.ForeignKey('self', related_name='+', null=True, blank=True, verbose_name=("Próxima fase"),
                             help_text=(""), on_delete=models.CASCADE)
    root = models.ForeignKey('self', related_name='+', null=True, blank=True, verbose_name=("Original"), help_text=(""),on_delete=models.CASCADE)

    # info sobre esta movimentação da declaracao
    annotation = models.CharField(max_length=500, verbose_name=("Justificativa"),
                                  help_text=("Anotação/Justificativa sobre a atualização no item"), blank=True,
                                  null=True, )

    # TODO: Use a config var STRICT_STATE_CHANGE to check if arbitrary state changes can be done
    def _check_status_change(self, new_status, old_status, allowed_users, allowed_previous_states, user_group):

        return True

        # check if new_status is in status_choices
        if not self.check_status():
            return False

        # check if allowed user
        if not user_group in allowed_users:
            return False

        # check if this is a valid state-change
        if not old_status in allowed_previous_states:
            return False

        return True

    # update status following the defined state machine
    def _update_status(self, new_status, ann=None):
        with transaction.atomic():
            if self.next:  # evitar operar em cima de uma declaracao ja avaliada
                err_print("Transaction ", self.id, "could not be updated. Next state already set: ", self.next)
                raise Exception("Transaction ", self.id, "could not be updated. Next state already set: ", self.next)
                return False

            # checking if its an update or creation
            if self.id != None:
                print("Updating Transaction ", self.id)
                # if its an update, is necessary to create a new copy and point 'previous' to the old state of the transaction
                self.previous = self.__class__.objects.get(id=self.id)
                self.next = None
                self.id = None
                try:
                    setattr(self, self.__class__._meta.pk.name, None)
                except Exception as ex:
                    err_print (ex)
            else:
                previous_id = None
                print("Starting new Transaction")

            # Updating status on this object
            self.status = new_status
            self.modification_date = datetime.now()
            if ann:
                self.annotation = ann
            
            # Saving/updating database
            self.save(force=True)

            if self.previous:
                self.previous.next = self.__class__.objects.get(id=self.id)
                self.previous.save(force=True)

            if not self.root:
                self.root = self.__class__.objects.get(id=self.id)
                self.save(force=True)

            i_print ("SAVED STATUS: Transaction ", self.id, "with status ", self.status, ". Previous state is: ", self.previous )

    def get_history(self):
        # returns a list with the annotation of each known state
        if not self.root:
            return []
        transaction_qs = self.__class__.objects.filter(root=self.root).annotate(author_username=F('author__username'))
        annotation_list = list(
            transaction_qs.values('id', 'modification_date', 'annotation', 'status', 'author_username'))
        return annotation_list

    def status_change(self, next_status, ann=''):
        # TODO: Modificar mensagem para deixar mais facil de saber a qual objeto ela pertence
        # if not self._check_status_change():
        #     raise Exception('Mudança de estado não permitida')
        self._update_status(next_status, ann)

    class Meta:
        abstract = True
        app_label = 'main'



        
    def __init__(self, *args, **kwargs):
        super(StateMachineModel, self).__init__(*args, **kwargs)
        self._meta.get_field('status').choices = self.STATUS_CHOICES
        # self.status = self.STATUS_CHOICES[0][0]
    
    def save(self, *args, **kwargs):
        
        if kwargs.pop('force', False):
            super(StateMachineModel, self).save(*args, **kwargs)
        else:
            err_print("StateMachineModel's save method cant't be called directly!")
            # raise(BaseException("StateMachineModel's save method cant't be called directly!"))
        
class WrongField(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    verbose_name = models.CharField(max_length=100)
    # verbose_name_plural  = models.CharField(max_length=45)
    # type = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'anp_daa_wrong_field'
        app_label = 'main'

    def __str__(self):
        return self.verbose_name.encode('utf-8')

class BaseUserInteraction(StateMachineModel):

    DRAFT = 'draft'
    SENT = 'sent'
    W_ADJUSTMENT = 'waiting_adjustment'
    W_REVIEW = 'waiting_review'
    W_INCORPORATION = 'waiting_incorporation'
    W_MANUAL_INCORPORATION = 'waiting_manual_incorporation'
    CONSUMED = 'consumed'

    waiting_states = [DRAFT, SENT, W_REVIEW]
    reproved_states = [W_ADJUSTMENT]
    approved_states = [W_INCORPORATION, W_MANUAL_INCORPORATION, CONSUMED]

    STATUS_CHOICES =  [
        (DRAFT, "Rascunho"), # Em edição pela fiel depositária / Sem validade
        (SENT, "Submetido - Em avaliação"), # Enviado pelo FD. Aguardando Avaliação
        (W_ADJUSTMENT, "Em exigência - Aguardando Retificação"), # Reprovado pelo analista ANP. Precisa ser consertado pelo FD
        (W_REVIEW, "Em exigência - Aguardando Reavaliação"), # Documento retificado aguardando reavaliação.
        (W_INCORPORATION, "Aprovado - Aguardando Incorporação"), # Documento aprovado pelo analista ANP
        (W_MANUAL_INCORPORATION, "Aprovado - Falha na incorporação / Aguardando incorporação manual"), # impossivel realizar incorporação no inventário. Precisa de ajustes manuais
        (CONSUMED, "Implementado / Incorporado"), # Dados adicionados à base
    ]

    status = models.CharField(choices=STATUS_CHOICES, default='draft', max_length=40, blank=False, null=False,
                              verbose_name=("Estado do Objeto"), help_text=("")) #repetido aqui para atualizar o choices
    declaration_type_choices = [
        ("new_sample", "Nova amostra"),
        ("reentry", "Reentrada"),
        ("transference", "Transferência de Depositária"),
        ("change_deposit", "Mudança de depósito"),
        ("unavailable_analysis", "Indisponível por Análise Nacional (uso próprio)"),
        ("unavailable_external_analysis", "Indisponível por Análise Nacional de terceiros"),
        ("destructive_analysis", "Análise Destrutiva"),
        ("unavailable_insufficient_amount", "Indisponível por Amostra insuficiente"),
    ]
    declaration_type = models.CharField(
        choices=declaration_type_choices,
        default="new_sample",
        verbose_name=("Tipo de declaração"),
        help_text=("Tipo de declaração"),
        max_length=100
    )
    wrong_fields = models.ManyToManyField(
        'WrongField',
        verbose_name=("Campos com erros"),
        blank=True
    )
    def approve(self, annotation=''):

        allowed_users = []  # Analista ANP(gerente ...), Super User
        previous_states = ['sent', 'waiting_review']
        next_state = 'waiting_incorporation'
        editable_fields = []

        self.annotation = None
        if annotation:
            self.annotation = annotation

        # if _check_status_change(self, new_status, old_status, allowed_users, allowed_previous_states, user_group)

        self._update_status(next_state)  # Changes currend object to approved and creates a new register in de db

    def reject(self, annotation=''):

        allowed_users = []  # Analista ANP(gerente ...), Super User
        previous_states = ['sent', 'waiting_review']
        next_state = 'waiting_adjustment'
        editable_fields = []

        self.annotation = None
        if annotation:
            self.annotation = annotation
        else:
            print('WARNING: Rejectiong transaction but reason is empty.')
        # if _check_status_change(self, new_status, old_status, allowed_users, allowed_previous_states, user_group)

        self._update_status(next_state)  # Changes currend object to rejected and creates a new register in de db

    def submit(self, annotation='', force=False):
        next_state = 'sent'

        if self.id != None:  # Is expected that every transaction submited is a new object, thus it shouldnt have an id
            if self.__class__.objects.filter(id=self.id).exists():
                if force:
                    print("Transaction ", self.id, " already exists. Force is enabled. Updating Transaction")
                else:
                    print ("Transaction ", self.id, " already exists. Force is False. Nothing to do here.")
                    return False


        self.annotation = None
        if annotation:
            self.annotation = annotation
        self._update_status(next_state)  # Starts a transaction persisting this object in the database

    def correct(self, annotation=''):
        next_state = 'waiting_review'
        self.annotation = None
        if annotation:
            self.annotation = annotation
        else:
            print('WARNING: Correcting transaction but justification is empty.')

        self._update_status(next_state)  # Creates an updated a transaction persisting this object in the database

    def update_author(self, newAuthor):
        self.author = newAuthor
        self.save(force=True)

    class Meta:
        abstract = True
        app_label = 'main'

class RegitryBaseModel(models.Model):
    create_date = models.CharField(db_column='create_date', max_length=255)
    submitted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return self.name.encode('utf-8')
    class Meta:
        abstract = True

class UserInfos (BaseUserInteraction):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    def __str__(self):
        return self.name.encode('utf-8')
    class Meta:
        managed = True
        db_table = 'user_info'
        app_label = 'main'

