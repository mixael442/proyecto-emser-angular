from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView, RetrieveAPIView
from .models import Usuarios
from .serializers import UsuariosSerializer
# Create your views here.


class ListaUsuarios(ListAPIView):
    serializer_class=UsuariosSerializer
    def get_queryset(self):
        return Usuarios.objects.all()

class ListaUsuariosCreate(CreateAPIView):
    serializer_class=UsuariosSerializer
    def get_queryset(self):
        return Usuarios.objects.all()

class ListaUsuariosDestroy(DestroyAPIView):
    serializer_class=UsuariosSerializer
    def get_queryset(self):
        return Usuarios.objects.all()

class ListaUsuariosUpdate(UpdateAPIView):
    serializer_class=UsuariosSerializer
    def get_queryset(self):
        return Usuarios.objects.all()

class ListaUsuariosRetrieve(RetrieveAPIView):
    serializer_class=UsuariosSerializer
    def get_queryset(self):
        return Usuarios.objects.all()