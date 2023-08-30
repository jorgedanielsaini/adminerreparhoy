from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from .ViewSets import *

router = DefaultRouter()
router.register(r'ereports', EReportViewSet)

urlpatterns = [
    path('laboral', e_laboral, name="e_laboral"),   
    path('ereports/<str:area>/novedades/', EReportNovedadViewSet.as_view({'get': 'list'}), name='e_report_novedades'),
] + router.urls

urlpatterns += staticfiles_urlpatterns()