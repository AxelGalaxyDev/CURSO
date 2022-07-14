


const uri="https://raw.githubusercontent.com/AxelGalaxyDev/API/main/";

// ENCONTRAR ELEMENTOS DEL HTML//
const el_lista = document.getElementById("lista-lambo");
const el_caja = document.getElementById("caja");
const el_titulo = document.querySelector("div#lambo-info h2");
const el_desc = document.querySelector("#contenido-principal p");

fetch(uri + "datos.json").then(function(respuesta) {
    return respuesta.json();
}).then(function(datos) {
  for(let i = 0; i < datos.length; i+=1) {
   //CREAR NUEVO BOTON//
   let nuevo_boton = document.createElement("button");
    nuevo_boton.innerHTML += datos[i].nombre;
    el_lista.appendChild(nuevo_boton);
      //AGREGAR EL EVENTO DE CLICK AL BOTON//
    nuevo_boton.addEventListener("click", function() {
      el_caja.src = uri + datos[i].imagen;
     el_titulo.innerHTML =  datos[i].nombre;
      el_desc.innerHTML = datos[i].descripcion;
    });
   }
}).catch(function(error) {
    console.log(error);
});
//BOTONES SIGUIENTE ANTERIOR//
