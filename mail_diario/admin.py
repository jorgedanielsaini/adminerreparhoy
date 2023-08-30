from django.contrib import admin
from mail_diario.models import Novedades
import requests

# Register your models here.

class NovedadesAdmin(admin.ModelAdmin):
    list_display = ("orden", "titulo", "fecha_envio")
    list_display_links = ("titulo",)
    list_filter = ("fecha_envio",)
    search_fields = ("titulo", "fecha_envio")
    ordering = ("orden",)
    list_editable = ("orden",)

admin.site.register(Novedades, NovedadesAdmin)

