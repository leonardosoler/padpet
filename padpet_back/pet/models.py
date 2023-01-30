from django.db import models
from main.models import  Teste
# Create your models here.


class Pet (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    # user = models.ForeignKey(Teste, verbose_name="Usuário associado", null=True, on_delete=models.SET_NULL, related_name="pet")
    def __str__(self):
        return self.name.encode('utf-8')
    class Meta:
        managed = True
        db_table = 'pet'
        app_label = 'pet'


