
 // función para crear cards segun los productos 
// y la sección deseada
function crearCards(productos,seccion) {
  //productos es un array de objetos.

  //let sectionPrueba = document.querySelector('#prueba');

  for (let i = 0; i < productos.length; i++) {
    

    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    cardDiv.style.width = "18rem";

    let imgDiv = document.createElement("img");
    imgDiv.setAttribute("src", "../images/logo3.png");
    imgDiv.setAttribute("class", "card-img-top");

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");
    //agrego id prueba
    cardBodyDiv.setAttribute("id",`${productos[i].id}`);

    let cardTitulo = document.createElement("h5");
    cardTitulo.setAttribute("class", "card-title");
    cardTitulo.innerText = `${productos[i].id}-- ${productos[i].nombre}`;

    let cardParrafo = document.createElement("p");
    cardParrafo.setAttribute("class", "card-text");
    cardParrafo.textContent = ` Precio: $ ${productos[i].precio}-- stock: ${productos[i].stock}`;

    let cardEnlace = document.createElement("a");
    cardEnlace.setAttribute("class", "btn btn-primary");
    //cardEnlace.setAttribute("href", "#");
    cardEnlace.innerText = "Agregar al carrito";

    // agregar todos los elementos al body div

    cardBodyDiv.appendChild(cardTitulo);
    cardBodyDiv.appendChild(cardParrafo);
    cardBodyDiv.appendChild(cardEnlace);

    //agregar elementos al card div principal

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(cardBodyDiv);

    //sectionPrueba.appendChild(cardDiv);
    seccion.appendChild(cardDiv);
  }
}

//esta funcion revisa la card seleccionada por el usuario

function revisarOpcionUsuario (opcion,productosCopiados){

  let coincideId = productos.find((producto) => producto.id == opcion);
  let arrayStocks = [];
 
    for(leti=0 ;i<productos.length;i++){

       arrayStocks.push( productos[i].stock);

    }

 

  if(coincideId){

   let indice = productos.findIndex(producto => producto.id == opcion);

    let stockOriginal = arrayStocks[indice]
    
    console.log(stockOriginal)

     
    arrayDeSeleccionados.push(productosCopiados[indice]);

    let quitarStock = productosCopiados[indice].stock -= 1;
    

    let costoProducto = productos[indice].precio ;

    //let restaStock = quitarStock - stockOriginal;

    console.log(productosCopiados[indice].stock, "este es el array que puede cambiar");
    console.log(quitarStock,"Esta es la cantidad que queda de stock");
    console.log(costoProducto,"Esto deberia ser el precio a pagar");
    console.log(stockOriginal,"Este stock no debería cambiar")

    controlarStock(productos[indice].stock);

    //stockOriginal=productosModificado[indice].stock

    
  }

 
  return arrayDeSeleccionados;
}


//esta función cuenta las repeticiones en un array
//para poder descontar del stock

function contarRepeticiones (array){

  let arrayId = [];
  let repeticiones ={};

  array.forEach(element => {

    arrayId.push( element.id);
    
  });
  
  for (const num of arrayId) {
    repeticiones[num] = repeticiones[num] ? repeticiones[num] + 1 : 1;
  }
  
  
  console.log(repeticiones[1])
  console.log(repeticiones[2])

  console.log(repeticiones[3])
  console.log(repeticiones[4])


}

// esta funcion agrega cards al carrito
function agregarAlCarritoDom (productosSeleccionados){

    crearCards(productosSeleccionados,sectionCarrito);
    
    

}

 //Esta función avisa cuando el stock llega a cero.

function controlarStock(stock) { //productos, opcionUsuario
  /* let idElegido = productos.find((producto) => producto.id == opcionUsuario);
  let mensaje;

  if (idElegido.stock <= 0) {
    mensaje = alert("Producto sin Stock");
  } */

  let mensaje;
  if (stock <= 0){
    mensaje = alert('Producto sin Stock')
    stock = 0 ;
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

    //mensajeOpcionIncorrecta.innerText = "La opción ingresada es incorrecta";
    //document.body.appendChild(mensajeOpcionIncorrecta);
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