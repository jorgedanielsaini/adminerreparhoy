from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .viewset import *
from .views import *

router = routers.SimpleRouter()
router.register('novedades', NovedadesViewset)

urlpatterns = [
    path('consumirapi', consumir_api, name="consumir_api"),
    path('', index, name="inicio"),
    path('mail', mail_vista, name="mail_vista"),
    path('gestion/tapa', gestion_tapa, name="gestion_tapa"),
    path('consumirapi', consumir_api, name="consumir_api"),
    path('crear_novedad_tapa/', crear_novedad_tapa, name='crear_novedad_tapa'),
    path('enviar_novedad_tapa', enviar_novedad_tapa, name='enviar_novedad_tapa'),
    path('ereports', ereports, name="ereports"),     
    path('api/', include(router.urls)),
] 