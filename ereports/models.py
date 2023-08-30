from django.db import models
from django.utils import timezone
#from ckeditor.fields import  RichTextField este es para agregar un editor html ej: sumario = RichTextField()

class EReport(models.Model):
    AREA_CHOICES = [
        ('Laboral', 'Laboral'),
        ('Impuestos', 'Impuestos'),
        ('Sociedades', 'Sociedades'),
        ('Contabilidad', 'Contabilidad'),
        ('Buenos Aires', 'Buenos Aires'),
        ('Córdoba', 'Córdoba'),
        ('Santa Fe', 'Santa Fe'),
        ('Rural', 'Rural'),
        ('Liquidación de sueldos', 'Liquidación de sueldos'),
    ]

    area = models.CharField(max_length=50, choices=AREA_CHOICES)
    fecha = models.DateField()

    def __str__(self):
        return f"{self.area} ({self.fecha})"

class EReportNovedad(models.Model):
    e_report = models.ForeignKey(
        EReport,
        on_delete=models.CASCADE,
        related_name='novedades',
        limit_choices_to={'fecha': timezone.now().date()}
    )
    novedad = models.ForeignKey('NovedadEReport', on_delete=models.CASCADE)
    orden = models.IntegerField()
    
    def __str__(self):
        return f"{self.novedad}"

class NovedadEReport(models.Model):
    seccion = models.CharField(max_length=50)
    content_type = models.CharField(max_length=50, blank=True)
    titulo = models.CharField(max_length=200, blank=True)
    sumario =  models.TextField(blank=True)
    link = models.URLField(blank=True)
    boton = models.CharField(max_length=50, blank=True)
    tipo_norma = models.CharField(max_length=50, blank=True)
    organismo = models.CharField(max_length=50, blank=True)
    nro_norma = models.CharField(max_length=50, blank=True)
    jurisdiccion = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f"{self.seccion} > {self.titulo}"

   