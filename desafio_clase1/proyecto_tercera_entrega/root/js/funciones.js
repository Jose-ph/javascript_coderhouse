// función para crear cards segun los productos
// y la sección deseada
function crearCards(productos, seccion) {
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
    cardBodyDiv.setAttribute("id", `${productos[i].id}`);

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

function revisarOpcionUsuario(opcion, productosCopiados) {
  //Controlar si el producto ya existe en el arrayeleccionados

  //let existeProducto = arrayDeSeleccionados.some((item) =>item.id === opcion);

  let coincideId = productos.find((producto) => producto.id == opcion);

  if (coincideId) {
    let indice = productos.findIndex((producto) => producto.id == opcion);

    let stockOriginal = arrayStocks[indice];

    console.log(stockOriginal, "stock original");

    //Cambiar arrayseleccionados por carrito
    arrayDeSeleccionados.push(productosCopiados[indice]);

    let quitarStock = (productosCopiados[indice].stock -= 1);
    let unidadesQuitadasAlStock = stockOriginal - quitarStock;

    let costoProducto = productos[indice].precio * unidadesQuitadasAlStock;

    //let restaStock = quitarStock - stockOriginal;

    console.log(
      productosCopiados[indice].stock,
      "este es el array que puede cambiar"
    );
    console.log(quitarStock, "Esta es la cantidad que queda de stock");
    console.log(costoProducto, "Esto deberia ser el precio a pagar");
    console.log(stockOriginal, "Este stock no debería cambiar");

    controlarStock(productos[indice].stock);
  }

  return arrayDeSeleccionados;
}

//esta función cuenta las repeticiones en un array
//para poder descontar del stock

function contarRepeticiones(array) {
  let arrayId = [];
  let repeticiones = {};

  array.forEach((element) => {
    arrayId.push(element.id);
  });

  for (const num of arrayId) {
    repeticiones[num] = repeticiones[num] ? repeticiones[num] + 1 : 1;
  }

  console.log(repeticiones[1]);
  console.log(repeticiones[2]);

  console.log(repeticiones[3]);
  console.log(repeticiones[4]);
}

// esta funcion agrega cards al carrito
function agregarAlCarritoDom(productosSeleccionados) {
  crearCards(productosSeleccionados, sectionCarrito);
}

//Esta función avisa cuando el stock llega a cero.

function controlarStock(stock) {
  let mensaje;
  if (stock <= 0) {
    mensaje = alert("Producto sin Stock");
    stock = 0;
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

/* IDEAS PARA EL CARRITO */

function agregarAlCarrito(idProducto) {
  //revisar si el producto se repite en el carrito
  let productoRepetido;

  productoRepetido = carritoUsuario.some(
    (producto) => producto.id == idProducto
  );

  if (productoRepetido) {
    botonAgregarAlCarrito.forEach((boton) => {
      boton.onclick = () => {
        boton.disabled = true;
        boton.style.display = "none";
      };
    });
  } else {
    let itemCoincideId = productos.find(
      (producto) => producto.id == idProducto
    );

    carritoUsuario.push({ ...itemCoincideId, unidadesElegidas: 1 });
  }

  actualizarCarrito();
}

function actualizarCarrito() {
  mostrarProductosCarrito();

  sumarUnidad();

  restarUnidad();

  borrarProductoCarrito();

  mostrarTotalGastado();

  mostrarBotonAgregar();

  guardarCarritoUsuario();

  $('#carrito .card').hide().fadeIn(1000);
}

function mostrarTotalGastado() {
  let precioTotal = 0;
  let productosTotal = 0;

  carritoUsuario.forEach((producto) => {
    precioTotal += producto.precio * producto.unidadesElegidas;

    productosTotal += producto.unidadesElegidas;
  });

  seccionMostrarTotal.innerHTML = `<p class="parrafo">La cantidad de productos es : ${productosTotal}
    y el valor total es  $: ${precioTotal.toFixed(2)}
  </p>`;

  
}

function borrarProductoCarrito() {
  /* carritoUsuario = carritoUsuario.filter((item)=>item.id != id );

  actualizarCarrito(); */

  let botonEliminar = document.querySelectorAll(".eliminar");

  botonEliminar.forEach((boton) => {
    boton.onclick = () => {
      id = boton.parentElement.id;
      console.log(id);

      carritoUsuario = carritoUsuario.filter((item) => item.id != id);

      actualizarCarrito();
    };
  });
}

function mostrarProductosCarrito() {
  sectionCarrito.innerHTML = "";
  carritoUsuario.forEach((item) => {
    sectionCarrito.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${item.img}" class="card-img-top">
    <div class="card-body" id="${item.id}">
    <h5 class="card-title">${item.id}-- Miel Pura</h5>
    <p class="card-text"> Precio: ${item.precio}-- Unidades:${item.unidadesElegidas}</p>
    <button type="button" class ="sumar">+</button>
    <button type="button" class="restar">-</button>
    <button type="button" class="btn btn-danger eliminar">X</button>

    </div>`;
  });
}

function sumarUnidad() {
  let botonSumar = document.querySelectorAll(".sumar");

  botonSumar.forEach((boton) => {
    boton.onclick = () => {
      carritoUsuario = carritoUsuario.map((item) => {
        let unidadesElegidas = item.unidadesElegidas;

        if (
          item.id == boton.parentElement.id &&
          unidadesElegidas < item.stock
        ) {
          unidadesElegidas++;
        }

        return {
          ...item,
          unidadesElegidas,
        };
      });
      actualizarCarrito();
    };
  });
}
//Esta función resta una unidad por cada click
function restarUnidad() {
  let botonRestar = document.querySelectorAll(".restar");

  botonRestar.forEach((boton) => {
    boton.onclick = () => {
      carritoUsuario = carritoUsuario.map((item) => {
        let unidadesElegidas = item.unidadesElegidas;

        if (item.id == boton.parentElement.id && unidadesElegidas > 1) {
          unidadesElegidas--;
        }

        return {
          ...item,
          unidadesElegidas,
        };
      });
      actualizarCarrito();
    };
  });
}

function sumarUnidadDesdeBotonOriginal() {
  botonAgregarAlCarrito.forEach((boton) => {
    boton.onclick = () => {
      carritoUsuario = carritoUsuario.map((item) => {
        let unidadesElegidas = item.unidadesElegidas;

        if (
          item.id == boton.parentElement.id &&
          unidadesElegidas < item.stock
        ) {
          unidadesElegidas++;
        }

        return {
          ...item,
          unidadesElegidas,
        };
      });
      actualizarCarrito();
    };
  });
}

function mostrarBotonAgregar() {
  /*Esta lógica se puede mejorar
    recorrer el carrito y habilitar el boton  cuyo id no está. */

  if (carritoUsuario.length === 0) {
    botonAgregarAlCarrito.forEach((boton) => {
      boton.style.display = "";
    });
  }
}

//Esta función guarda el carrito del usuario en el local storage
function guardarCarritoUsuario() {
  let carritoJson = JSON.stringify(carritoUsuario);
  localStorage.setItem("carritoUsuario", carritoJson);
}
