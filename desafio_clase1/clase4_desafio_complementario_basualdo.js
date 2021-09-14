/*Calculadora de precio final con IVA e impuestos  */



function agregarIva(precioSinIva){

    const iva = 0.21;

    let resultado = precioSinIva * (1+ iva);

    return resultado;
}

function agregarImpuestos (precioSinIva){

    const ingresosBrutos = 0.35;
    const impuestosInternos = 0.25;
    const tasaMunicipal = 0.15;

    let resultado = (precioSinIva * (1+ ingresosBrutos)) + (precioSinIva * (1+impuestosInternos)) + (precioSinIva * (1+ tasaMunicipal));

    return resultado
}

function calcularPrecioFinal (precioConIva,precioConImpuestos){

    let resultado = precioConIva + precioConImpuestos;

    return resultado;
}


let precioProducto = parseInt(prompt('Por favor ingresa el precio del producto (sin iva)'));

let precioConIva= agregarIva(precioProducto); ;
let precioConImpuestos= agregarImpuestos(precioProducto); ;


console.log(calcularPrecioFinal(precioConIva,precioConImpuestos));
