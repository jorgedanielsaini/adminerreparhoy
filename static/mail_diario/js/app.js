//ELEMENTOS DEL DOM
const table = document.querySelector("tbody");
const pie = document.querySelector("#pie");
const principal = document.querySelector("#principal");

const impuestos = document.querySelector("#impuestos");
const laboral = document.querySelector("#laboral");
const sociedades = document.querySelector("#sociedades");
const contabilidad = document.querySelector("#contabilidad");
const cordoba = document.querySelector("#cordoba");
const bsas = document.querySelector("#bsas");
const staFe = document.querySelector("#staFe");
const linkImpuestos = document.querySelector("#link-impuestos");
const linkLaboral = document.querySelector("#link-laboral");
const linksociedades = document.querySelector("#link-sociedades");
const linkContabilidad = document.querySelector("#link-contabilidad");
const linkCordoba = document.querySelector("#link-cordoba");
const linkBsAs = document.querySelector("#link-bsas");
const linkStaFe = document.querySelector("#link-staFe");

//Estilos y botones
const estilos ={
    botones: {
        verdes: {
        ver_mas: "https://old.errepar.com/mkt/2021/pbl/boton-vermas-verde.png",
        ver_video: "https://old.errepar.com/mkt/2021/pbl/boton-vervideo-verde.png",
        sumate: "https://old.errepar.com/mkt/2021/pbl/boton-sumate-verde.png",
        inscribite: "https://old.errepar.com/mkt/2021/pbl/boton-inscribite-verde.png"
        },
        blancos: {
        ver_mas: "https://old.errepar.com/mkt/2021/pbl/boton-vermas-blanco.png",
        ver_video: "https://old.errepar.com/mkt/2021/pbl/boton-vervideo-blanco.png",
        sumate: "https://old.errepar.com/mkt/2021/pbl/boton-sumate-blanco.png",
        inscribite: "https://old.errepar.com/mkt/2021/pbl/boton-inscribite-blanco.png"
        }
    },
    blanco: {
        clase: "blanca",
        fondo: "background-color: #ffffff; padding:4%",
        seccion: "font-size: 14px; font-weight: bold; text-align: left; text-transform: uppercase; color: #252F58; padding: 7px; margin: 0px; line-height: 1.3; border-bottom: 1px solid black;",
        titulo: "font-size: 26px; text-align: left; color: #252F58; padding: 7px; margin: 0px; line-height: 1.3;",
        sumario: "font-size: 15px; text-align: left; color: #252F58; line-height: 1.4;padding: 7px; margin: 0px;", 
    },
    negro: {
        clase: "negra",
        fondo: "background-color: #252F58; padding:4%",
        seccion:"font-size: 14px; font-weight: bold; text-align: left; text-transform: uppercase; color: white; padding: 7px; margin: 0px; line-height: 1.3; border-bottom: 1px solid white;",
        titulo: "font-size: 26px; text-align: left; color: #ffffff; padding: 7px; margin: 0px; line-height: 1.3;",
        sumario:"font-size: 15px; text-align: left; color: #ffffff; line-height: 1.4;padding: 7px; margin: 0px;"
    },
    verde: {
        clase: "verde",
        fondo: "background-color: #00A88F; padding:4%",
        seccion:"font-size: 14px; font-weight: bold; text-align: left; text-transform: uppercase; color: white; padding: 7px; margin: 0px; line-height: 1.3; border-bottom: 1px solid white;",
        titulo: "font-size: 26px; text-align: left; color: #ffffff; padding: 7px; margin: 0px; line-height: 1.3;",
        sumario:"font-size: 15px; text-align: left; color: #ffffff; line-height: 1.4;padding: 7px; margin: 0px;"
    },
    botones_vencimientos: {
        blancos: {
            impuestos:"https://old.errepar.com/mkt/2022/pbl/venc-impuestos-verde.png",
            laboral: "https://old.errepar.com/mkt/2022/pbl/venc-laboral-verde.png"
        },
        verdes: {
            impuestos:"https://old.errepar.com/mkt/2022/pbl/venc-impuestos-blanco.png",
            laboral:"https://old.errepar.com/mkt/2022/pbl/venc-laboral-blanco.png"
        }
    }
}

// Agrega la fecha en el header del mail
function agregarFecha(){
   let fecha = new Date();
   let dia = fecha.getDate()
   let mes = fecha.getMonth()
   let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre","noviembre", "diciembre"]
   let anio = fecha.getFullYear();
   
   let fechaActual = dia + " de " + meses[mes] + " de " + anio;
   
   document.querySelector(".fecha").textContent = fechaActual;
   document.querySelector("body").removeAttribute("onload");

   let mesNumber = parseInt(fecha.getMonth()) + 1;

   let linkEH ="https://old.errepar.com/mkt/2022/pbl/ErreparHoy_"+ dia + "-" + mesNumber + "_web.html"
   document.querySelector("#linkErreparHoy").href = linkEH;
}

//Creación y agregado de novedades
function crearCaja(estilo, botones, seccion, titulo, sumario, link, linkBtn,imagen) {
    let tr = document.createElement("tr");
    tr.classList.add("novedad", estilo.clase);
    table.insertBefore(tr, pie);
    let td = document.createElement("td");
    td.classList.add("novedadTd");
    td.setAttribute("colspan", "2");
    td.style = estilo.fondo;
    tr.appendChild(td);

    if(seccion){
        let pSeccion = document.createElement("p");
        pSeccion.classList.add("pSeccion");
        pSeccion.style= estilo.seccion;
        pSeccion.textContent = seccion;
        td.appendChild(pSeccion);
    }

    if(imagen  && imagen != "https://old.errepar.com/mkt/2022/pbl/"){
        if(imagen == "https://old.errepar.com/mkt/2022/pbl/sintesis-errepar.png"){
            let aImg = document.createElement("a");
            aImg.href = link;
            let pImagenDestacada = document.createElement("p");
            td.appendChild(pImagenDestacada);
            pImagenDestacada.appendChild(aImg);
            let img = document.createElement("img");
            img.classList.add("imagenDestacada");
            img.style = "max-width: 560px;";
            img.setAttribute("border","0");
            img.setAttribute("alt","imagen destacada del día");
            img.src = imagen;
            aImg.appendChild(img);

        } else {
            let pImagenDestacada = document.createElement("p");
            td.appendChild(pImagenDestacada);
            let img = document.createElement("img");
            img.classList.add("imagenDestacada");
            img.style = "max-width: 560px;";
            img.setAttribute("border","0");
            img.setAttribute("alt","imagen destacada del día");
            img.src = imagen;
            pImagenDestacada.appendChild(img);
        }
    }
   
    if(titulo){ 
        let pTitulo = document.createElement("p");
        pTitulo.classList.add("pTitulo");
        pTitulo.style= estilo.titulo;
        pTitulo.textContent = titulo;
        td.appendChild(pTitulo);
    }
   
    if(sumario){
        let pSumario = document.createElement("p");
        pSumario.classList.add("pSumario");
        pSumario.style= estilo.sumario;
        pSumario.innerHTML = sumario;
        td.appendChild(pSumario);
    }

   if(link){
        let a = document.createElement("a");
        a.setAttribute("target", "_blank")
        let boton = document.createElement("img");
        boton.classList.add("btn");
        boton.setAttribute("border","0");
        if(linkBtn == "Ver más"){
            boton.src = botones.ver_mas;
        } else if(linkBtn == "Ver video"){
            boton.src = botones.ver_video;
        } else if(linkBtn == "Sumate"){
            boton.src = botones.sumate;
        }  else if(linkBtn == "Inscribite"){
            boton.src = botones.inscribite;
        }
        a.href= link;
        td.appendChild(a);
        a.appendChild(boton);
   }
}

//Herramientas de Eliminado y Edición de novedades
function agregarHerramientas(){
    let novedadesTr = document.querySelectorAll(".novedad");
    let novedadesTd = document.querySelectorAll(".novedadTd");

    for(let i = 0; i < novedadesTd.length; i++){ 
        let idTd = "novedad-td-"+i;
        let idtr= "novedad-tr-"+i;
        novedadesTd[i].id = idTd;
        novedadesTr[i].id = idtr;

        if (!novedadesTd[i].querySelector(".herramientas")) {// funciona pero arroja error: novedadesTd[i].querySelector is not a function
            //Crear div para agregar los botones "Eliminar / Editar" 
            let divHerramientas = document.createElement("div");
            divHerramientas.classList.add("herramientas");
            novedadesTd[i].appendChild(divHerramientas);

            //Botón editar
            let btnEditar = document.createElement("button");
            btnEditar.textContent = "Editar";
            
            btnEditar.onclick = () => {
                
                console.log("Cambiar color")
            }

            divHerramientas.appendChild(btnEditar);
        }
    }
}

//Estilo a los links
function linkN(){
    let sumarios = document.querySelectorAll(".sNegra")
    
    sumarios.forEach( e =>{
       if(e.querySelector("a")){
          e.querySelectorAll("a").forEach(a =>{
             a.style = "color: #00A88F;";
          })
       }
    })
}
 
function linkV(){
    let sumarios = document.querySelectorAll(".sVerde")
    
    sumarios.forEach( e =>{
       if(e.querySelector("a")){
          e.querySelectorAll("a").forEach(a =>{
             a.style = "color: #263057;";
          })
       }
    })
}
 
function colorLinks(){
    linkN();
    linkV();
}

//TERMINAR
function terminar() {
   let admin = document.querySelector(".admnin");

   document.querySelector("body").removeChild(admin);
   document.querySelector("body").removeChild(document.querySelector(".e-reports"));
   document.querySelector("body").removeChild(document.querySelector("script")) 
   document.querySelector("#linksEreports").removeChild(document.querySelector("#herramientasMail"))
   
   let novedades = document.querySelectorAll(".novedadTd");
   
   novedades.forEach(n =>{
      n.removeChild(document.querySelector(".herramientas"))
   })
}

//Agrega los mails tematicos
function editarEreport(){
   document.querySelector(".admnin").hidden = true;
   document.querySelector(".e-reports").hidden = false;
}

function guardarErreports(){
   document.querySelector(".admnin").hidden = false;
   document.querySelector(".e-reports").hidden = true;
   if(impuestos.value){
     let aImp = document.createElement("a");
     aImp.setAttribute("target","_blank")
     aImp.href = impuestos.value;
     aImp.textContent = "Impuestos";
     linkImpuestos.appendChild(aImp);
   }

   if(laboral.value){
      if(impuestos.value){
         linkLaboral.textContent = " | "
      }
      let aLab = document.createElement("a");
      aLab.setAttribute("target","_blank");
      aLab.href = laboral.value;
      aLab.textContent = "Laboral";
      linkLaboral.appendChild(aLab);
   }

   if(sociedades.value){
      if(laboral.value){
         linksociedades.textContent = " | "
      }
      let aSoc = document.createElement("a");
      aSoc.setAttribute("target","_blank");
      aSoc.href = sociedades.value;
      aSoc.textContent = "Sociedades";
      linksociedades.appendChild(aSoc);
   }

   if(contabilidad.value){
      if(sociedades.value){
         linkContabilidad.textContent = " | "
      }
      let aCont = document.createElement("a");
      aCont.setAttribute("target","_blank");
      aCont.href = contabilidad.value;
      aCont.textContent = "Contabilidad";
      linkContabilidad.appendChild(aCont);
   }

   if(cordoba.value){
      let aCba = document.createElement("a");
      aCba.setAttribute("target","_blank");
      aCba.href = cordoba.value;
      aCba.textContent = "Córdoba";
      linkCordoba.appendChild(aCba);
   }

   if(staFe.value){
      if(bsas.value){
         linkStaFe.textContent = " | "
      }
      let aStaFe = document.createElement("a");
      aStaFe.setAttribute("target","_blank");
      aStaFe.href = staFe.value;
      aStaFe.textContent = "Santa Fe";
      linkStaFe.appendChild(aStaFe);
   }

   if(bsas.value){
      if(cordoba.value){
         linkBsAs.textContent = " | "
      }
      let aBsAs = document.createElement("a");
      aBsAs.setAttribute("target","_blank");
      aBsAs.href = bsas.value;
      aBsAs.textContent = "Buenos Aires";
      linkBsAs.appendChild(aBsAs);
   }
}

//Agregar el link al mail del día en el footer
function linkErreparHoy(){
   let fecha = new Date();
   let dia = fecha.getDate();
   let mes = fecha.getMonth() + 1;

   let linkEH ="https://old.errepar.com/mkt/2022/pbl/ErreiusHoy_"+ dia + "-" + mes + "_web.html"

}

async function obtenerNovedadesApi() {
    const response = await fetch("http://127.0.0.1:8000/api/novedades/");
    const data = await response.json();
    importarNovedades2(data)
}

function importarNovedades2(data){
    // Crear un objeto con los atributos de cada novedad
    for(let i = 0; i < data.length;i++){
        let novedad = {
        seccion: data[i].area,
        titulo: data[i].titulo,
        sumario: data[i].sumario,
        link: data[i].link,
        linkBtn: data[i].boton,
        imagen: data[i].url_imagen
        }

        // Agrega las cajas
        let novedades = document.querySelectorAll(".novedad");
        let cantidadNovedades = novedades.length; //es un número
        if(!document.querySelector(".novedad")){ //Hacer que la primera novedad me tome la imagen destacada
            crearCaja(estilos.blanco, estilos.botones.verdes, novedad.seccion, novedad.titulo, novedad.sumario, novedad.link, novedad.linkBtn, novedad.imagen)
        
        } else if(novedades[cantidadNovedades - 1].classList[1] == "blanca"){
            crearCaja(estilos.negro, estilos.botones.blancos, novedad.seccion, novedad.titulo, novedad.sumario, novedad.link, novedad.linkBtn, novedad.imagen)
            
        } else if(novedades[cantidadNovedades - 1].classList[1] == "negra"){
            crearCaja(estilos.verde, estilos.botones.blancos, novedad.seccion, novedad.titulo, novedad.sumario, novedad.link, novedad.linkBtn, novedad.imagen)
            
        } else if(novedades[cantidadNovedades - 1].classList[1] == "verde"){
            crearCaja(estilos.blanco, estilos.botones.verdes, novedad.seccion, novedad.titulo, novedad.sumario, novedad.link, novedad.linkBtn, novedad.imagen)
        }

        //Agregar color a las etiquetas "a"
        colorLinks();

        //Agrega los botones de "Editar" y "Eliminar"
        agregarHerramientas();
    }
    
}

obtenerNovedadesApi();
//importarNovedades2();