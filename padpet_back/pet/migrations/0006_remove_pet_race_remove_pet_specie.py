# Generated by Django 4.1.7 on 2023-04-08 22:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pet', '0005_pet_age'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='race',
        ),
        migrations.RemoveField(
            model_name='pet',
            name='specie',
        ),
    ]
