//Esta función avisa cuando el stock llega a cero.

function controlarStock(productos, opcionUsuario) {
  let idElegido = productos.find((producto) => producto.id == opcionUsuario);
  let mensaje;

  if (idElegido.stock <= 0) {
    mensaje = alert("Producto sin Stock");
  }

  return mensaje;
}

//Esta función pregunta la cantidad de producto que desea el usuario
//devuelve dicha cantidad
function preguntarCantidad() {
  let cantidadUsuario = prompt("Por favor indique la cantidad de unidades");

  return cantidadUsuario;
}

/*Esta función quita la cantidad de stock comprado por el usuario
devuelve la cantidad restante de stock segund el id del producto */
function quitarCantidadAlStock(cantidadUsuario, productos, opcionUsuario) {
  let idElegido = productos.find((producto) => producto.id == opcionUsuario);

  return (idElegido.stock -= cantidadUsuario);
}

/*Esta función calcula el precio  a pagar en base a la cantidad elegida 
por el usuario devuelve el precio a pagar */
function calcularPrecio(cantidadUsuario, productos, opcionUsuario) {
  let precioPagar;
  for (let i = 0; i < productos.length; i++) {
    if (opcionUsuario == productos[i].id) {
      precioPagar = cantidadUsuario * productos[i].precio;
    }
  }

  return precioPagar;
}

/*Esta funcion revisa la respuesta del usuario y activa las demas funciones
para poder realizar la compra. */
function revisarRespuestaUsuario(opcionUsuario, productos) {
  let cantidadUsuario;

  let coincideId = productos.find((producto) => producto.id == opcionUsuario);

  if (coincideId) {
    cantidadUsuario = preguntarCantidad();
    controlarStock(productos, opcionUsuario);
    quitarCantidadAlStock(cantidadUsuario, productos, opcionUsuario);
    calcularPrecio(cantidadUsuario, productos, opcionUsuario);
  } else if (opcionUsuario == "salir") {
    const mensajeFinCompra = document.createElement("h2");

    mensajeFinCompra.innerText = "Gracias por su compra";

    document.body.appendChild(mensajeFinCompra);
  } else {
    let mensajeOpcionIncorrecta = document.createElement("h2");

    mensajeOpcionIncorrecta.innerText = "La opción ingresada es incorrecta";
    document.body.appendChild(mensajeOpcionIncorrecta);
  }
}

//Esta función muestra los productos disponibles en el menú
//para poder ser comprados mediante su id,

function mostrarMenu(productos, menu) {
  menu.innerHTML = "";
  productos.forEach((producto) => {
    /*  menu += `
                ${producto.id} ${producto.nombre} ${producto.envase} ${producto.peso}
                
                 ` */

    menu.innerHTML += ` <ul> 
               <li>  ${producto.id} ${producto.nombre} ${producto.envase} ${producto.peso} </li>

                </ul>
                
                `;
  });

  menu += "Elige un número para comprar ese producto, o salir para terminar";
  let opcionUsuario = prompt(menu);
  return opcionUsuario;
}

productos = [
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

/*  const menu  = "Estos son los productos disponibles "; */
let menu = document.getElementById("menu-productos");
let opcion;

alert("Hola! Esta es la Tienda de Miel");

do {
  opcion = mostrarMenu(productos, menu);

  revisarRespuestaUsuario(opcion, productos);
} while (opcion != "salir");

if (opcion == "salir") {
  let sectionProductos = document.getElementById("listado-productos");

  let listaProductos = document.createElement("ul");

  let items = document.createElement("li");
  items.innerText = "Aquí aparecerán los productos seleccionados";

  listaProductos.appendChild(items);

  sectionProductos.appendChild(listaProductos);
}
