from django.shortcuts import render
from rest_framework import viewsets
from .models import NovedadEReport
from .serializers import NovedadEReportSerializer

def e_laboral(request):
    return render(request, "ereport/ereport_laboral.html") 


class NovedadEReportViewSet(viewsets.ModelViewSet):
    queryset = NovedadEReport.objects.all()
    serializer_class = NovedadEReportSerializer

