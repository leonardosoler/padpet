from django.db import models

# Create your models here.
class Teste (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(db_column='name', max_length=255)
    def __str__(self):
        return self.name.encode('utf-8')
    class Meta:
        managed = True
        db_table = 'teste'
        app_label = 'main'