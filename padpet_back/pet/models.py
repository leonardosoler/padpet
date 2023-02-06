from django.db import models
# from main.models import  Teste
# Create your models here.
from main.models import RegitryBaseModel
class Race (RegitryBaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)

    def __str__(self):
        return self.name.encode('utf-8')

    class Meta:
        managed = True
        db_table = 'race'
        app_label = 'pet'

class Specie (RegitryBaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    race = models.ManyToManyField(Race, verbose_name="race", related_name="specie_race_set")

    def __str__(self):
        return self.name.encode('utf-8')

    class Meta:
        managed = True
        db_table = 'specie'
        app_label = 'pet'

class Pet (RegitryBaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    # specie = models.ForeignKey(Specie, verbose_name="specie", null=True, on_delete=models.SET_NULL, related_name="specie")
    race = models.ManyToManyField(Race, verbose_name="race", related_name="pet_race_set")

    def __str__(self):
        return self.name.encode('utf-8')
    class Meta:
        managed = True
        db_table = 'pet'
        app_label = 'pet'


