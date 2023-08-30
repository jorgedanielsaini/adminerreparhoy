from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .serializers import *
from .models import *

class EReportViewSet(viewsets.ModelViewSet):
    queryset = EReport.objects.all()
    serializer_class = EReportSerializer

class EReportNovedadViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = EReportNovedadSerializer

    def get_queryset(self):
        area = self.kwargs['area']
        fecha_actual = timezone.now().date()
        ereport = get_object_or_404(EReport, area=area, fecha=fecha_actual)
        return ereport.novedades.all().order_by('orden')