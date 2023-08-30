from django.shortcuts import render, HttpResponse, redirect
from .models import Novedades
import requests

# Create your views here.
def index(request):
    return render(request, "mail_diario/index.html") 

def ereports(request):
    return render(request, "mail_diario/ereports.html") 

def mail_vista(request):
    return render(request, "mail_diario/mail_vista.html")

def gestion_tapa(request):
    novedades = Novedades.objects.all().order_by('orden')
    return render(request, "mail_diario/gestion_tapa.html", {"novedades":novedades}) 

def crear_novedad_tapa(request):
   return render(request, 'mail_diario/crear_novedad_tapa.html')

def enviar_novedad_tapa(request):
    # Obtén los datos del formulario
    data = {
        'fecha_envio': request.POST['fecha'],
        'url_imagen': request.POST['url_imagen'],
        'area': request.POST['area'],
        'titulo': request.POST['titulo'],
        'sumario': request.POST['sumario'],
        'link': request.POST['link'],
        'boton': request.POST['boton'],
        'orden': request.POST['orden']  # Corrige esto
        # Completa con el resto de los campos
    }

    # Realiza la solicitud POST a la API
    response = requests.post('http://127.0.0.1:8000/api/novedades/', data=data)

    if response.status_code == 201:  # 201 indica creado (Created)
        return redirect('gestion_tapa')

    return render(request, 'mail_diario/gestion_tapa.html')

def consumir_api(request):
    if request.method == "POST":
        confirmacion = request.POST.get("confirmacion", None)

        if confirmacion == "SI":
            url = 'https://jsonplaceholder.typicode.com/comments'  # URL de la API externa que se va a consumir
            response = requests.get(url)

            if response.status_code == 200:
                datos_json = response.json()

                # Iterar sobre los datos JSON y crea instancias de tu modelo para guardarlos en la base de datos
                for indice, dato in enumerate(datos_json[:20]):
                    nuevo_dato = Novedades(
                        fecha_envio="2023-7-27",
                        area="Laboral",
                        titulo=dato['name'],
                        sumario=dato['body'],
                        orden=indice +1
                    )
                    nuevo_dato.save()

        return redirect('admin:mail_diario_novedades_changelist')
    else:
        return render(request, "mail_diario/confirmar_import.html")

    #return render(request, "consumir_api.html")

def confirmar_import(request):
    return render(request, "mail_diario/confirmar_import.html")