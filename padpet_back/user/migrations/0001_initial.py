# Generated by Django 4.1.5 on 2023-02-06 01:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pet', '0003_remove_pet_specie_pet_create_date_pet_race_and_more'),
        ('local', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfileInfos',
            fields=[
                ('create_date', models.CharField(db_column='create_date', max_length=255)),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('full_name', models.CharField(db_column='full_name', max_length=255, verbose_name='Nome completo')),
                ('document', models.IntegerField(verbose_name='CPF')),
                ('tel', models.CharField(max_length=11, verbose_name='Telefone')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('address', models.ManyToManyField(to='local.address', verbose_name='Endereço')),
                ('local', models.ManyToManyField(to='local.localdata', verbose_name='Local')),
                ('pet', models.ManyToManyField(to='pet.pet', verbose_name='Pets')),
                ('submitted_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
