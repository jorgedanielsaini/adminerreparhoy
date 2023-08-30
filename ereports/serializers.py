from rest_framework import serializers
from .models import EReport, EReportNovedad, NovedadEReport

class NovedadEReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = NovedadEReport
        fields = '__all__'

class EReportSerializer(serializers.ModelSerializer):
    novedades = NovedadEReportSerializer(many=True, read_only=True)

    class Meta:
        model = EReport
        fields = '__all__'

class EReportNovedadSerializer(serializers.ModelSerializer):
    class Meta:
        model = EReportNovedad
        fields = '__all__'

class EReportNovedadSerializer(serializers.ModelSerializer):
    novedad = NovedadEReportSerializer()  # Usar el serializador de NovedadEReport

    class Meta:
        model = EReportNovedad
        fields = '__all__'