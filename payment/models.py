from django.db import models

# Create your models here.
class Payment (models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(db_column='nome', max_length=255)
    def __str__(self):
        return self.nome.encode('utf-8')
    class Meta:
        managed = True
        db_table = 'payment'
        app_label = 'payment'