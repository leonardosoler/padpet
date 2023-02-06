from django.db import models
from django.contrib.auth.models import User, Group
from pet.models import Pet
class Address(models.Model):
    id = models.AutoField(primary_key=True)
    street = models.CharField()
    city = models.CharField()
    complement = models.CharField()
    state = models.CharField()
    zip_code = models.CharField()

    class Meta:
        app_label = 'local'
class Local(models.Model):

    id = models.AutoField(primary_key=True)
    address = models.ForeignKey(Address, verbose_name=("Endereço"))
    user = models.OneToOneField(User, verbose_name=("Usuário associado"))
    pet = models.ForeignKey(Pet, verbose_name=("Pets"))

    class Meta:
        app_label = 'local'