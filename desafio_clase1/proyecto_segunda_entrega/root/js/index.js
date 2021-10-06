








/*  const menu  = "Estos son los productos disponibles "; */
let menu = document.getElementById("menu-productos");
let opcion;

//alert("Hola! Esta es la Tienda de Miel");

//do {
 // opcion = mostrarMenu(productos, menu);

  //revisarRespuestaUsuario(opcion, productos);
//} while (opcion != "salir");

if (opcion == "salir") {
  let sectionProductos = document.getElementById("listado-productos");

  let listaProductos = document.createElement("ul");

  let items = document.createElement("li");
  items.innerText = "Aquí aparecerán los productos seleccionados";

  listaProductos.appendChild(items);

  sectionProductos.appendChild(listaProductos);
}

//Evento botón submit

const botonEnviar = document.querySelector("#btn-enviar");

botonEnviar.onclick = () => {
  const nombreUsuario = document.querySelector("#nombre-usuario").value;
  const apellidoUsuario = document.querySelector("#apellido-usuario").value;
  const dniUsuario = document.querySelector("#dni-usuario").value;
  const paisUsuario = document.querySelector("#pais-usuario").value;

  let mensajeBienvenida = document.querySelector("#bienvenida");
  mensajeBienvenida.textContent = `Hola! ${nombreUsuario} ! esta es la tienda de miel !`;

  //enviar todos los datos al sessionstorage

  let guardarNombreUsuario = sessionStorage.setItem("nombre", nombreUsuario);
  let guardarApellidoUsuario = sessionStorage.setItem(
    "apellido",
    apellidoUsuario
  );
  let guardarDniUsuario = sessionStorage.setItem("dni", dniUsuario);
  let guardarPaisUsuario = sessionStorage.setItem("pais", paisUsuario);
};

// función para crear cards segun los productos

//let sectionPrueba = document.querySelector("#fila-servicios");//
