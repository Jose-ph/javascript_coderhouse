let productos = [
    {
    id: 1,
    nombre: "Miel Pura",
    peso: "500g",
    envase: "plástico",
    precio: 250,
    stock: 50,
  },
  {
    id: 2,
    nombre: "Miel Pura",
    peso: "500g",
    envase: "vidrio",
    precio: 350,
    stock: 60,
  },
  {
    id: 3,
    nombre: "Miel Pura",
    peso: "1000g",
    envase: "plástico",
    precio: 500,
    stock: 90,
  },
  {
    id: 4,
    nombre: "Miel Pura",
    peso: "1000g",
    envase: "vidrio",
    precio: 750,
    stock: 80,
  },
];

let sectionPrueba = document.querySelector("#fila-servicios");

crearCards(productos, sectionPrueba);

let botonAgregarAlCarrito = document.querySelectorAll(".card a");
let carritoUsuario = [];
let arrayDeSeleccionados = []; //este array  guarda el objeto del producto elegido
const sectionCarrito = document.querySelector("#carrito");

let arrayStocks = [];
 
    for(let i=0 ;i<productos.length;i++){

       arrayStocks.push( productos[i].stock);

    }
  




botonAgregarAlCarrito.forEach((boton) => {
  boton.onclick = () => {

    let opcionUsuario;
    
    opcionUsuario = boton.parentElement.id;

    console.log(opcionUsuario);

    sectionCarrito.innerHTML = ` <img src="../images/cesta-de-la-compra.png" alt="carrito de compras">`;

    //controlarStock(productos, opcionUsuario);

    revisarOpcionUsuario(opcionUsuario,productos);

    //agregarAlCarritoDom(arrayDeSeleccionados, sectionCarrito);

    
    
    //guardar la seleccion del usuario en el local storage

    localStorage.setItem(
      "arrayProductosSeleccionados",
      JSON.stringify(arrayDeSeleccionados)
    );
  };
});


//Prueba de jquery

const saludo = $('body').append ("<h1>Hola este mensaje fue creado mediante jquery!!</h1>");


//IDEA poner el form y usar jquery para ir manipulando.