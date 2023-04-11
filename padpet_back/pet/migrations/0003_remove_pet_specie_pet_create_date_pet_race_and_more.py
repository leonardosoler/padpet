# Generated by Django 4.1.5 on 2023-02-06 00:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('pet', '0002_alter_pet_specie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='specie',
        ),
        migrations.AddField(
            model_name='pet',
            name='create_date',
            field=models.CharField(db_column='create_date', default='2023-02-05', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='pet',
            name='race',
            field=models.ManyToManyField(related_name='pet_race_set', to='pet.race', verbose_name='race'),
        ),
        migrations.AddField(
            model_name='pet',
            name='submitted_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='race',
            name='create_date',
            field=models.CharField(db_column='create_date', default='2023-02-05', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='race',
            name='submitted_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='specie',
            name='create_date',
            field=models.CharField(db_column='create_date', default='2023-02-05', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='specie',
            name='submitted_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='specie',
            name='race',
            field=models.ManyToManyField(related_name='specie_race_set', to='pet.race', verbose_name='race'),
        ),
    ]
