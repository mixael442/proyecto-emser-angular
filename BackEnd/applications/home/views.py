from django.shortcuts import render
from .serializers import ApiProyectoUsuarioSerializer, ApiProyectoUsuarioSerializerView, ProyectoSerializer
from .models import Proyecto, ProyectoUsuario
from rest_framework.generics import ListAPIView, CreateAPIView ,DestroyAPIView, UpdateAPIView, RetrieveAPIView


# Create your views here.

class ApiProyectoUsuarioView(ListAPIView):
    serializer_class = ApiProyectoUsuarioSerializer
    def get_queryset(self):
        return ProyectoUsuario.objects.all()

class ApiProyectoUsuarioViewSerializer(ListAPIView):
    serializer_class = ApiProyectoUsuarioSerializerView
    def get_queryset(self):
        return ProyectoUsuario.objects.all()

class ApiProyectoUsuarioViewCreate(CreateAPIView):
    serializer_class = ApiProyectoUsuarioSerializer
    def get_queryset(self):
        return ProyectoUsuario.objects.all()

class ApiProyectoUsuarioViewDestroy(DestroyAPIView):
    serializer_class = ApiProyectoUsuarioSerializer
    def get_queryset(self):
        return ProyectoUsuario.objects.all()

class ApiProyectoUsuarioViewUpdate(UpdateAPIView):
    serializer_class = ApiProyectoUsuarioSerializer
    def get_queryset(self):
        return ProyectoUsuario.objects.all()

class ListaProyectoUsuarioRetrieve(RetrieveAPIView):
    serializer_class=ApiProyectoUsuarioSerializer
    def get_queryset(self):
        return ProyectoUsuario.objects.all()






class ApiProyectoView(ListAPIView):
    serializer_class = ProyectoSerializer
    def get_queryset(self):
        return Proyecto.objects.all()

class ApiProyectoViewCreate(CreateAPIView):
    serializer_class = ProyectoSerializer
    def get_queryset(self):
        return Proyecto.objects.all()

class ApiProyectoViewDestroy(DestroyAPIView):
    serializer_class = ProyectoSerializer
    def get_queryset(self):
        return Proyecto.objects.all()

class ApiProyectoViewUpdate(UpdateAPIView):
    serializer_class = ProyectoSerializer
    def get_queryset(self):
        return Proyecto.objects.all()

class ListaProyectoRetrieve(RetrieveAPIView):
    serializer_class=ProyectoSerializer
    def get_queryset(self):
        return Proyecto.objects.all()