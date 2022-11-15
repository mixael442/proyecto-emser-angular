from django.urls import path, re_path
from . import views

app_name = 'login_app'

urlpatterns = [
    path(
        'api/usuarios/',
        views.ListaUsuarios.as_view(),
    ),
    path(
        'api/usuarios/create/',
        views.ListaUsuariosCreate.as_view(),
    ),
    path(
        'api/usuarios/update/<pk>/',
        views.ListaUsuariosUpdate.as_view(),
    ),
    path(
        'api/usuarios/destroy/<pk>/',
        views.ListaUsuariosDestroy.as_view(),
    ),
    path(
        'api/usuarios/retrieve/<pk>/',
        views.ListaUsuariosRetrieve.as_view(),
    )
]