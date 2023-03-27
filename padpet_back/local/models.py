from django.db import models
from django.contrib.auth.models import User, Group
from pet.models import Pet
from main.models import BaseModel
class Address(BaseModel):
    id = models.AutoField(primary_key=True)
    street = models.CharField(db_column='street', max_length=255, verbose_name =("Rua"))
    city = models.CharField(db_column='city', max_length=255, verbose_name =("Cidade"))
    complement = models.CharField(db_column='complement', max_length=255, verbose_name =("Complemento"))
    state = models.CharField(db_column='state', max_length=255, verbose_name =("Estado"))
    zip_code = models.CharField(db_column='zip_code', max_length=255, verbose_name =("CEP"))

    class Meta:
        app_label = 'local'
class LocalData(BaseModel):

    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='state', max_length=255, verbose_name =("Nome"))
    email = models.EmailField(verbose_name=("Email"))
    address = models.ForeignKey(Address, verbose_name=("Endereço"), on_delete=models.CASCADE)
    user = models.OneToOneField(User, verbose_name=("Usuário associado"), related_name="manager", on_delete=models.CASCADE)
    pet = models.ForeignKey(Pet, verbose_name=("Pets"), on_delete=models.CASCADE)
    telephone = models.CharField(verbose_name="Telefone", max_length=11)
    cnpj = models.IntegerField(verbose_name=("CPF"))
    class Meta:
        app_label = 'local'