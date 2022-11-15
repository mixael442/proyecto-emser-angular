
from django.db import models

# Create your models here.


class Usuarios(models.Model):

    TIPO_USER = [
        ('1', 'SuperUsuario' ),
        ('2', 'Usuario' )
        ]


    username = models.CharField('Usuario', max_length=20, blank=True)
    password = models.CharField('Contraseña', max_length=20, unique=True, blank=True)
    nombre = models.CharField('Nombre', max_length=20)
    apellido = models.CharField('Apellido', max_length=20, blank=True)
    phone_number = models.CharField('Telefono', max_length=17, blank=True)
    email = models.EmailField('Email', blank=True)
    activo = models.BooleanField('Activo', default=True, blank=True)
    tipo = models.CharField(
        max_length=1,
        choices=TIPO_USER,
        default=2,)

    def __str__(self):
        return self.nombre + ' ' + self.apellido
