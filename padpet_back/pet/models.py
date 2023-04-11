from django.db import models
# from main.models import  Teste
# Create your models here.
from main.models import BaseModel


class Specie (BaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name',  max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        managed = True
        db_table = 'specie'
        app_label = 'pet'

class Race (BaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    specie = models.ForeignKey(Specie, verbose_name="specie", on_delete=models.SET_NULL, null = True, related_name="specie_race_set") 
    def __str__(self):
        return self.name

    class Meta:
        managed = True
        db_table = 'race'
        app_label = 'pet'

class Pet (BaseModel):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    specie = models.ForeignKey(Specie, verbose_name="specie", null=True, on_delete=models.SET_NULL, related_name="specie")
    race = models.ForeignKey(Race, verbose_name="race", null=True, on_delete=models.SET_NULL, related_name="pet_race_set")
    # specie = models.CharField(db_column='specie', max_length=255)
    # race = models.CharField(db_column='race', max_length=255)
    age = models.CharField(db_column='age', max_length=255)
    
    def __str__(self):
        return self.name
    class Meta:
        managed = True
        db_table = 'pet'
        app_label = 'pet'


