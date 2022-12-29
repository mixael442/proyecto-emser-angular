from asyncore import read
from applications.login.models import Usuarios
from .models import Proyecto
from rest_framework import serializers
from .models import ProyectoUsuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = (
            'id',
            'nombre'
        )
class ProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = (
            'id',
            'nombre',
        )
class ApiProyectoUsuarioSerializer(serializers.ModelSerializer):
    #proyecto = ProyectoSerializer()
    #usuario_id = UsuarioSerializer()
    class Meta: 
        model = ProyectoUsuario
        fields = (
            'id', 
            'usuario_id', 
            'proyecto',
            'activo'
            )


class ApiProyectoUsuarioSerializerView(serializers.ModelSerializer):
    proyecto = ProyectoSerializer()
    usuario_id = UsuarioSerializer()
    class Meta: 
        model = ProyectoUsuario
        fields = (
            'id', 
            'usuario_id', 
            'proyecto',
            'activo'
            )
        