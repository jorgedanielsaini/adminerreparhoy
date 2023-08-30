//Cada sección es una tabla. Todas las tablas se incoporan al <div id="contenido">.
const contenido = document.getElementById("contenido");

//Verifica si existe un tbody con el ID de nombre de seccion, si no existe ejecuta "Crear_tabla_seccion"
//Si el tbody exixte, te agrega un <tr>.
function agregarNovedad(seccion, titulo, sumario, link, boton){
    //las variables deben venir del formulario o de la API
    if(!document.getElementById(seccion)){
        crea_tabla_seccion(seccion, titulo, sumario, link, boton);
    } else {
        agregar_a_seccion(seccion, titulo, sumario, link, boton);
    }
}

function crea_tabla_seccion(seccion, titulo, sumario, link, boton){
    let table = document.createElement("table");

    // Agregar las propiedades y atributos a la tabla
    table.setAttribute("width", "600");
    table.setAttribute("align", "center");
    table.setAttribute("style", "text-align: center; background-color: #ffffff; margin: auto; font-size: 13px; border-collapse: collapse; margin-bottom: 20px;");
    
    let tbody = document.createElement("tbody");
    tbody.id = seccion;
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    //La validación de la sección se hace antes de usar la función, si la función se ejecuta es porque siempre hay una sección
    let p_seccion = document.createElement("p");
    p_seccion.setAttribute("style","text-transform:uppercase; background-color: #77CDC0; width: max-content; height: 24px; padding: 2px 10px; border-radius: 8px; color: #263057; font-family: Roboto; text-align: center; font-size: 16px; font-style: normal; font-weight: 700; line-height: 20px;display: flex; align-items: center; justify-content: center; margin-left: 7px;line-height:1.3");
    p_seccion.textContent = seccion;
    td.appendChild(p_seccion);

    //Validar cada uno de los atributos de la novedad, si hay crear párrafo y agregar al <td>.
    if(titulo != ""){
        let p_titulo = document.createElement("p");
        p_titulo.setAttribute("style", "font-size:32px;text-align:left;color:#263057;padding:7px;margin:0px; font-family:Raleway; font-size: 32px; font-style: normal; font-weight: 400; line-height: normal;");
        p_titulo.textContent = titulo;
        td.appendChild(p_titulo);
    }

    if(sumario != ""){
        let p_sumario = document.createElement("p");
        p_sumario.setAttribute("style","text-align:left; font-family: Roboto; font-size: 16px; font-style: normal; font-weight: 400; line-height: 20px; padding:7px; margin:0px");
        p_sumario.innerHTML = `${sumario}`;
        td.appendChild(p_sumario);
    }

    if(link != ""){
        let p_link = document.createElement("p");
        p_link.setAttribute("style", "float: right; margin-right: 10px; border: none; width: max-content; height: 32px; border-radius: 23px; background: #24378F; text-align: center; font-family: Raleway; font-size: 16px; font-style: normal;font-weight: 700; line-height: normal; letter-spacing: 0.9px; text-transform: uppercase; display: flex; align-items: center; justify-content: center; padding: 0px 10px;");
        let a = document.createElement("a");
        a.setAttribute("style","text-decoration: none;color: #ffffff");
        a.href = link;
        a.setAttribute("target","_blank");
        a.textContent = boton;
        p_link.appendChild(a);
        td.appendChild(p_link);
    }

    //agregarHerramientas(td);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    contenido.appendChild(table);
}

function agregar_a_seccion(seccion, titulo, sumario, link, boton){
    //La validación de la sección se hace antes de usar la función, busca la sección, si la sección existe, le agrega el tr
    let tbody = document.getElementById(seccion);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let hr = document.createElement("hr");

    //No va sección, se agrega una linea divisoria.
    hr.setAttribute("style","width: 575px; height: 1px; opacity: 0.5; background:#A2B0E2;");    
    td.append(hr);

    //Validar cada uno de los atributos de la novedad, si hay crear párrafo y agregar al <td>.
    if(titulo != ""){
        let p_titulo = document.createElement("p");
        p_titulo.setAttribute("style", "font-size:32px;text-align:left;color:#263057;padding:7px;margin:0px; font-family:Raleway; font-size: 32px; font-style: normal; font-weight: 400; line-height: normal;");
        p_titulo.textContent = titulo;
        td.appendChild(p_titulo);
    }

    if(sumario != ""){
        let p_sumario = document.createElement("p");
        p_sumario.setAttribute("style","text-align:left; font-family: Roboto; font-size: 16px; font-style: normal; font-weight: 400; line-height: 20px; padding:7px; margin:0px");
        p_sumario.textContent = sumario;
        td.appendChild(p_sumario);
    }

    if(link != ""){
        let p_link = document.createElement("p");
        p_link.setAttribute("style", "float: right; margin-right: 10px; border: none; width: max-content; height: 32px; border-radius: 23px; background: #24378F; text-align: center; font-family: Raleway; font-size: 16px; font-style: normal;font-weight: 700; line-height: normal; letter-spacing: 0.9px; text-transform: uppercase; display: flex; align-items: center; justify-content: center; padding: 0px 10px;");
        let a = document.createElement("a");
        a.setAttribute("style","text-decoration: none;color: #ffffff");
        a.href = link;
        a.setAttribute("target","_blank");
        a.textContent = boton;
        p_link.appendChild(a);
        td.appendChild(p_link);
    }

    //agregarHerramientas(td);
    tr.appendChild(td);
    tbody.appendChild(tr);
    
}

//Ejecuta desde el formulario
function agregar_desde_form(){
    let seccion = document.getElementById("seccion").value;
    let titulo = document.getElementById("titulo").value;
    let sumario = document.getElementById("sumario").value;
    let link = document.getElementById("link").value;
    let boton = document.getElementById("linkBtn").value;
    agregarNovedad(seccion, titulo, sumario, link, boton)
}

//--------------------------------------------------------
//---------------- AGREGAR HERRAMIENTAS ------------------
//--------------------------------------------------------

function agregarHerramientas(td){
    //Se crean todos los botones, se le agrega una clase a cada tipo y estilos
    let divHerramientas = document.createElement("div");
    divHerramientas.classList.add("herramientas");
    
    
    //------------------ BOTON ELIMINAR ----------------------
    //--------------------------------------------------------
    let boton_eliminar = document.createElement("button");
    boton_eliminar.classList.add("boton_eliminar");
    boton_eliminar.setAttribute("style", "margin:5px; border: None; border-radius:8px; background: #F1948A; font-weight: 700;");
    boton_eliminar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
  </svg>`;

    boton_eliminar.addEventListener('click', (event) => {
        // Obtener el elemento padre (fila "tr") del botón al que se hace clic
        let filaPadre = event.target.closest('tr');

        if (filaPadre) {
            // Obtener la tabla a la que pertenece la fila
            let tablaPadre = filaPadre.closest('table');

            // Comprobar si la fila es la única en la tabla
            if (tablaPadre.rows.length === 1) {
                // Si es la única fila, eliminar la tabla
                tablaPadre.remove();
            } else {
                // Si hay más filas, eliminar solo la fila
                filaPadre.remove();
            }
        }
    });



    //-------------------- BOTON EDITAR ----------------------
    //--------------------------------------------------------
    let boton_editar = document.createElement("button");
    boton_editar.classList.add("boton_editar");
    boton_editar.setAttribute("style", "margin:5px; border: None; border-radius:8px; background: #85C1E9 ; font-weight: 700;");
    boton_editar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>`;

    boton_editar.addEventListener('click', ()=> {
        console.log("Editar")
    });
   

    //-------------------- BOTON SUBIR -----------------------
    //--------------------------------------------------------
    let boton_subir = document.createElement("button");
    boton_subir.classList.add("boton_subir");
    boton_subir.setAttribute("style", "margin:5px; border: None; border-radius:8px; background: #D2B4DE; font-weight: 700;");
    boton_subir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
  </svg>`;

    boton_subir.addEventListener('click', (event)=> {
        console.log(event.target)
    });
    

    //-------------------- BOTON BAJAR -----------------------
    //--------------------------------------------------------
    let boton_bajar = document.createElement("button");
    boton_bajar.classList.add("boton_bajar");
    boton_bajar.setAttribute("style", "margin:5px; border: None; border-radius:8px; background: #D2B4DE; font-weight: 700;");
    boton_bajar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
  </svg>`;

    boton_bajar.addEventListener('click', ()=> {
        console.log("bajar")
    });


    //Se agregan a cada novedad
    td.appendChild(divHerramientas);
    divHerramientas.appendChild(boton_eliminar);
    divHerramientas.appendChild(boton_editar);
    divHerramientas.appendChild(boton_subir);
    divHerramientas.appendChild(boton_bajar);
}



//

async function obtenerNovedadesApi() {
    const response = await fetch("http://127.0.0.1:8000/ereports/Laboral/novedades/");
    const data = await response.json();
    for(let i = 0; i < data.length; i++){
        let seccion = data[i].novedad.seccion;
        let titulo = data[i].novedad.titulo;
        let sumario = data[i].novedad.sumario;
        let link = data[i].novedad.link;
        let boton = data[i].novedad.boton;
        agregarNovedad(seccion, titulo, sumario, link, boton);
    }
}

/*/PRUEBAS
agregarNovedad("laboral", "Validez de la extinción del contrato de trabajo por mutuo acuerdo", "Pablo Kleiman describe y analiza los requisitos formales que debe contener la extinción del contrato de trabajo por mutuo acuerdo", "https://www.errepar.com/validez-extincion-contrato-trabajo-mutuo-acuerdo", "ver contenido");

agregarNovedad("impuestos", "Ganancias: pago a cuenta extraordinario", "Traigamos a la memoria que el 21 de julio de 2023 la Administración Federal de Ingresos Públicos (AFIP) publicó la Resolución General (AFIP) N° 5391 por medio de la cual creó un pago cuenta extraordinario en el impuesto a las ganancias.", "link", "ver contenido");

agregarNovedad("laboral", "Empleados de comercio: se homologa el acuerdo julio – septiembre 2023", "Por medio de la Resolución 1487/23, el Ministerio de Trabajo homologó el acuerdo salarial por el cual la Federación Argentina de Empleados de Comercio y Servicios (FAECyS) y las tres cámaras representantes del sector privado acordaron un nuevo aumento paritario correspondiente al trimestre julio-septiembre.", "https://www.errepar.com/empleados-de-comercio-incremento-julio-septiembre", "ver contenido");
*/

obtenerNovedadesApi();

