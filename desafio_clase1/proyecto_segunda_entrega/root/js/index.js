let sectionPrueba = document.querySelector("#fila-servicios");

crearCards(productos, sectionPrueba);

let botonAgregarAlCarrito = document.querySelectorAll(".card a");
let carritoUsuario = [];
let arrayDeSeleccionados = []; //este array  guarda el objeto del producto elegido
const sectionCarrito = document.querySelector("#carrito");



botonAgregarAlCarrito.forEach((boton) => {
  boton.onclick = () => {

    let opcionUsuario;
    
    opcionUsuario = boton.parentElement.id;

    console.log(opcionUsuario);

    sectionCarrito.innerHTML = ` <img src="../images/cesta-de-la-compra.png" alt="carrito de compras">`;

    controlarStock(productos, opcionUsuario);

    revisarOpcionUsuario(opcionUsuario, productos,contadorQuitaStock);

    agregarAlCarritoDom(arrayDeSeleccionados, sectionCarrito);

    
    //guardar la seleccion del usuario en el local storage

    localStorage.setItem(
      "arrayProductosSeleccionados",
      JSON.stringify(arrayDeSeleccionados)
    );
  };
});
