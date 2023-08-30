from rest_framework import serializers
from .models import *

class NovedadesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Novedades
        fields = '__all__'
        
