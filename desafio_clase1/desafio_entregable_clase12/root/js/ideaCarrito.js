/* Si no tenés un backend, la forma correcta de hacerlo es:Cada producto sabe de su Stock. Vos tenés un objeto de productos que actúa como tu base de datos, onda

const productos = {
  "AABC1234": {
      "color": "#00FFFF",
      "nombre": "Remera",
      "descripcion": "Lorem ipsum"
      "marca": {
           "id": 1,
           "nombre": "Nike"
       },
      "talle": "S",
      "stock": 100
   }
}

(editado)
16:56
ese AABC1234 es el SKU que es el ID de tu producto
16:56
SKU = Stock Keeping Unit
16:57
y después tenés separado, un objeto "carrito"
16:57
si yo fuese vos, ese objeto "carrito" lo haría como una clase
16:57
class Carrito {}
16:59
y ahí le mandaría varias funciones para mutar su estado
function agregarItem(producto, cantidad = 1){
}function removerItem(producto, cantidad = 1){
}function limpiarCarrito(producto){
}function calcularTotal(){ //incluye IVA
}function calcularSubTotal(){ //no incluye IVA
}function calcularIVA(){}etc, (editado) 
16:59
y tu carrito mantendría un array u objeto de "items" (editado) 
16:59
con una propiedad producto el mismo formato que el objeto productos arriba (editado) 
17:02
entonces te quedaría:

const carrito = new Carrito();

carrito.agregarItem(productos["AABC123456"], 1);
console.log(carrito.items) 

esto te mostraría algo así:

[{
    cantidad: 1,
    producto: {
        sku: "asdasd"
    }
}] */