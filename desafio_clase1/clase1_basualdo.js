const nombreUsuario = prompt('Por favor,ingresa tu nombre');
const apellidoUsuario = prompt('Por favor, ingresa tu apellido');
const anioNacimientoUsuario = parseInt(prompt('Por favor, ingresa tu año de nacimiento'));
const anioActual = 2021;
let edadUsuario = anioActual - anioNacimientoUsuario;

console.log('Hola ' + nombreUsuario + ' ' + apellidoUsuario);

console.log('Tu edad es ' + edadUsuario);
