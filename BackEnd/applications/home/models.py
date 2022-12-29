
from django.db import models

from applications.login.models import Usuarios

# Create your models here.


class Proyecto(models.Model):
    nombre = models.CharField('proyecto', max_length=20)
    activo = models.BooleanField('activo', default=True, blank=True)

    def __str__(self):
        return self.nombre


class ProyectoUsuario(models.Model):
    usuario_id = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    activo = models.BooleanField('activo', default=True, blank=True)

    def __str__(self):
        return str(self.usuario_id) + ' ' + str(self.proyecto)
        
    