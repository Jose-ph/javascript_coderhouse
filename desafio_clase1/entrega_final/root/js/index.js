let sectionCards = document.querySelector("#fila-servicios");

crearCards(productos, sectionCards);

let botonAgregarAlCarrito = document.querySelectorAll(".card a");

let arrayDeSeleccionados = []; //este array  guarda el objeto del producto elegido

let opcionUsuario;

const sectionCarrito = document.querySelector("#carrito");

let seccionMostrarTotal = document.querySelector("#total-carrito");


botonAgregarAlCarrito.forEach((boton) => {
  boton.onclick = () => {
    

    opcionUsuario = boton.parentElement.id;

    agregarAlCarrito(opcionUsuario);

    console.log(opcionUsuario);


    //boton.style.display = "none";
    
  };
});

//IDEA poner el form y usar jquery para ir manipulando.

let nombreUsuario = $("#nombre-usuario");
let apellidoUsuario = $("#apellido-usuario");
let dniUsuario = $("#dni-usuario");
let paisUsuario = $("#pais-usuario");
let botonEnviar = $("#btn-enviar");
let datosUsuario = [];



// Se asegura que el DOM esté listo para manipular

$(document).ready(() => console.log("El DOM está listo"));

botonEnviar.click(() => {
  const URLGET = "https://jsonplaceholder.typicode.com/posts";

  datosUsuario.push(nombreUsuario.val());
  datosUsuario.push(apellidoUsuario.val());
  datosUsuario.push(dniUsuario.val());
  datosUsuario.push(paisUsuario.val());

  console.log(datosUsuario);

  const infoEnviar = JSON.stringify(datosUsuario);

  $.post(URLGET, infoEnviar, (respuesta, estado) => {
    if (estado === "success") {
      $("#bienvenida").hide();
      $("#form-js").hide();
      $("#fila-servicios").hide();
      $("#menu-productos").hide();
      $("#carrito").prepend(`<h2>Envio de información exitoso</h2>`);
    } else console.log("ERROR DE ENVÍO");
  });
});

//Estas dos líneas  muestran el carrito guardado en el storage
let carritoUsuario = JSON.parse(localStorage.getItem("carritoUsuario")) || [];
actualizarCarrito();






//Prueba animaciones

$('#banner').fadeOut(1000).fadeIn(1000);




///PRUEBA DE FILTRADO


let botonPlastico = $('#plastico');
let botonVidrio = $('#vidrio');

botonPlastico.click(()=>{

  let cards = document.querySelectorAll('.card')
 cards = Array.from(cards).filter(card => card.className != "card plástico")

 //crear una función para actualizar tienda

  mostrarCardsFiltradas(cards);

});

botonVidrio.click(()=>{

  let cards = document.querySelectorAll('.card')
 cards = Array.from(cards).filter(card => card.className != "card vidrio")

 //crear una función para actualizar tienda

  mostrarCardsFiltradas(cards);

});





function mostrarCardsFiltradas (cards){

  sectionCards.innerHTML = "";
  cards.forEach((card) => {
    sectionCards.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${card.img}" class="card-img-top">
    <div class="card-body" id="${card.id}">
    <h5 class="card-title">${card.id}-- Miel Pura</h5>
    <p class="card-text"> Precio: ${card.precio}-- Unidades:${card.unidadesElegidas}</p>
    <a class="btn btn-primary">Agregar al carrito</a>

    </div>`;

    
  });
}

//<div class="card plástico" style="width: 18rem;">
 // <img src="../images/logo3.png" class="card-img-top">
   // <div class="card-body" id="1">
     // <h5 class="card-title">1-- Miel Pura</h5>
     // <p class="card-text"> Precio: $ 250-- stock: 50</p>
     // <a class="btn btn-primary">Agregar al carrito</a>
     // </div>
     // </div>
//