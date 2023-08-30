from django.contrib import admin
from .models import *

class EReportNovedadAdmin(admin.ModelAdmin):
    list_display = ("orden", "novedad", "e_report")
    list_display_links = ("novedad",)
    list_filter = ("e_report",)
    #search_fields = ("titulo", "fecha_envio")
    ordering = ("orden",)
    list_editable = ("orden",)



admin.site.register(EReport)
admin.site.register(EReportNovedad,EReportNovedadAdmin)
admin.site.register(NovedadEReport)
