let mensaje = "Hola"
let numeroUsuario = parseInt(prompt('Hola ingresa un número entero'))

for (let i = 0 ; i< numeroUsuario; i++){
    console.log(mensaje);
}


let textoUsuario = prompt('Hola ingresa una palabra');

while (textoUsuario !== 'ESC'){

    
    console.log(textoUsuario + "" + "CoderHouse")

    textoUsuario = prompt ('Ingresa otra palabra o tipea ESC para terminar !');
}
