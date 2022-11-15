from django.urls import path, re_path
from . import views

app_name = 'home_app'

urlpatterns = [
    path(
        'api/proyectousuario/',
        views.ApiProyectoUsuarioView.as_view(),
    ),
    path(
        'api/proyectousuarioview/',
        views.ApiProyectoUsuarioViewSerializer.as_view(),
    ),
    path(
        'api/proyectousuario/create/',
        views.ApiProyectoUsuarioViewCreate.as_view(),
    ),
    path(
        'api/proyectousuario/destroy/<pk>/',
        views.ApiProyectoUsuarioViewDestroy.as_view(),
    ),
    path(
        'api/proyectousuario/update/<pk>/',
        views.ApiProyectoUsuarioViewUpdate.as_view(),
    ),
    path(
        'api/proyectousuario/retrieve/<pk>/',
        views.ListaProyectoUsuarioRetrieve.as_view(),
    ),


    path(
        'api/proyecto/',
        views.ApiProyectoView.as_view(),
    ),
    path(
        'api/proyecto/create/',
        views.ApiProyectoViewCreate.as_view(),
    ),
    path(
        'api/proyecto/destroy/<pk>/',
        views.ApiProyectoViewDestroy.as_view(),
    ),
    path(
        'api/proyecto/update/<pk>/',
        views.ApiProyectoViewUpdate.as_view(),
    ),
    path(
        'api/proyecto/retrieve/<pk>/',
        views.ListaProyectoRetrieve.as_view(),
    )
]