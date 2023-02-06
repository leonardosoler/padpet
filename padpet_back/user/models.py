from django.db import models
from main.models import BaseModel
from pet.models import Pet
from local.models import LocalData, Address
# Create your models here.
class UserProfileInfos(BaseModel):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(db_column='full_name', max_length=255, verbose_name =("Nome completo"))
    document = models.IntegerField(verbose_name=("CPF"))
    tel = models.CharField(verbose_name="Telefone", max_length=11)
    pet = models.ManyToManyField(Pet, verbose_name=("Pets"))
    local = models.ManyToManyField(LocalData, verbose_name=("Local"))
    email = models.EmailField(verbose_name=("Email"))
    address = models.ManyToManyField(Address, verbose_name=("Endereço"))

    class Meta:
        app_label = 'user'