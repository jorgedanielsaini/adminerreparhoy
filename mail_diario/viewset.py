from rest_framework import viewsets
from .serializer import *
from .models import *
from datetime import date

class NovedadesViewset(viewsets.ModelViewSet):
    today = date.today()
    queryset = Novedades.objects.filter(fecha_envio=today).order_by('orden')
    serializer_class = NovedadesSerializer