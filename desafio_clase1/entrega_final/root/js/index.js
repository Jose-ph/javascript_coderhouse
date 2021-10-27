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
/* 
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
 */


//Estas dos líneas  muestran el carrito guardado en el storage
let carritoUsuario = JSON.parse(localStorage.getItem("carritoUsuario")) || [];
actualizarCarrito();


//Prueba llamado a API DOLAR

const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"



$('.dolar').each(function(){

  $(this).click(()=>{
    $.get(URLGET,function(respuesta,estado){

      if(estado=== "success"){
        let datosDolarOficial = respuesta
        $('.parrafo').text(`${datosDolarOficial[0].casa.venta}`)
      }
    })
  })

})

  



//Prueba animaciones

$('#banner').fadeOut(1000).fadeIn(1000);




///PRUEBA DE FILTRADO


let botonPlastico = $('#plastico');
let botonVidrio = $('#vidrio');
let botonTodos = $('#todos');

let cards = document.querySelectorAll('.card');
let cardsDuplicadas = Array.from(cards).map(cards=> cards); 

botonTodos.click(()=>{
    /* sectionCards.innerHTML ="";
    crearCards(productos,sectionCards); */
    cardsDuplicadas = cardsDuplicadas.filter(card => card.className)

  console.log(cards);
 //crear una función para actualizar tienda
  
  mostrarCartas(cardsDuplicadas);

})

botonPlastico.click(()=>{

 
  
 
 cardsDuplicadas = cardsDuplicadas.filter(card => card.className != "card vidrio")

  console.log(cards);
 //crear una función para actualizar tienda
  
  mostrarCartaClon(cardsDuplicadas);
 
 /* cardsDuplicadas = Array.from(cards).map(cards=> cards);  */
 
 

  //mostrarCardsFiltradas(cards);

});

   botonVidrio.click(()=>{

    cardsDuplicadas = Array.from(cards).map(cards=> cards); 

  //let cards = document.querySelectorAll('.card')
   //let cardsDuplicadas = Array.from(cards).map(cards=> cards); 

 cardsDuplicadas = cardsDuplicadas.filter(card => card.className != "card plástico")

 //crear una función para actualizar tienda
   console.log(cards)
   
    

    mostrarCartaClon(cardsDuplicadas);
      
    
      //cardsDuplicadas = Array.from(cards).map(cards=> cards); 
 
    console.log(cardsDuplicadas)
   
  //mostrarCardsFiltradas(cards);

}); 

function mostrarCartaClon (cartas){

  sectionCards.innerHTML = "";
  sectionCards.appendChild(cartas[0]);
  sectionCards.appendChild(cartas[1]);
  console.log(cartas[0]);
  console.log(cartas[1]);
  cardsDuplicadas = Array.from(cards).map(cards=> cards); 

}

function mostrarCartas(cartas){

  sectionCards.innerHTML = "";
  sectionCards.appendChild(cartas[0]);
  sectionCards.appendChild(cartas[1]);
  sectionCards.appendChild(cartas[2]);
  sectionCards.appendChild(cartas[3]);
  console.log(cartas[0]);
  console.log(cartas[1]);
  cardsDuplicadas = Array.from(cards).map(cards=> cards); 

}