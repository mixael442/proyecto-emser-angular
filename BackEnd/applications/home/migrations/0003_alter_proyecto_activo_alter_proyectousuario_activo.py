# Generated by Django 4.1 on 2022-09-14 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_proyecto_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='activo',
            field=models.BooleanField(default=True, verbose_name='activo'),
        ),
        migrations.AlterField(
            model_name='proyectousuario',
            name='activo',
            field=models.BooleanField(default=True, verbose_name='activo'),
        ),
    ]
