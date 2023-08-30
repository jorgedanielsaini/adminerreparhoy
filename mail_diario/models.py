from django.db import models

# Create your models here.

class Novedades(models.Model):
    tipo_boton = [
        ("Ver más","Ver más"),
        ("Ver video","Ver video"),
        ("Sumate","Sumate"),
        ("Inscribite","Inscribite")
	]

    fecha_envio = models.DateField()
    area = models.CharField(max_length=50, blank=True)
    titulo= models.CharField(max_length=200, blank=True)
    sumario= models.TextField(blank=True)
    link = models.URLField(blank=True)
    url_imagen = models.URLField(blank=True)
    boton = models.CharField( max_length=20, choices=tipo_boton, blank=True)
    orden = models.IntegerField(blank=False)
    
    def __str__(self):
        return f"{self.titulo}"