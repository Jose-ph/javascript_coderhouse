
//Calculadora de tiempo promedio en relación a la cantidad de turnos asignados.

function calcularTiempoDeEsperaPromedio(turnosAsignados){

    
    let promedioEsperaPorTurno = 15;

    let resultadoTiempoDeEspera = turnosAsignados * promedioEsperaPorTurno;

    return resultadoTiempoDeEspera;
}

function asignarTurno(){

    let mensajeUsuario = prompt('Perfecto! Tu turno ya está registrado!');

    return mensajeUsuario;

}
function obtenerTurno(){

   

    let nuevoTurno = prompt('Hola para obtener un nuevo turno ingresa Si, para cancelar ingresa No');

    return nuevoTurno;

}

function revisarRespuestaUsuario(respuestaUsuario){

    if (respuestaUsuario.toLowerCase() === "si" ){

        asignarTurno();

        cantidadDeTurnosAsignados=  cantidadDeTurnosAsignados + 1;

        alert( "Su tiempo de espera es de " + calcularTiempoDeEsperaPromedio(cantidadDeTurnosAsignados) + "minutos");



        


    } else if (respuestaUsuario.toLowerCase() === ""){

        console.log('Lo siento no entendí tu respuesta.');
        
    }

    else if (respuestaUsuario.toLowerCase() === "no"){

        console.log('Esperamos tenga buenos días. Saludos !')
    }

    else {
        console.log('Lo siento no es una respuesta valida')
        
    }
}

//Esa clase creará usuarios y guardara nombre dni  y le dira un saludo
class usuario {

    constructor(nombre,dni){

        this.nombre = nombre;
        this.dni = parseInt(dni);
        
        
    }
    //este método le dirá al usuario la info que suministró
    mostrarDatosUsuario(){

       return console.log(`Los datos ingresados son, nombre: ${this.nombre} y DNI: ${this.dni}`);

    }
}

let nuevoTurnoUsuario;
let cantidadDeTurnosAsignados = 0;
let tiempoDeEspera;



 do { 

    let nombreUsuario = prompt('Por favor ingresa tu nombre');
    let dniUsuario = Number(prompt('Por favor ingresa tu DNI'));

    let  nuevoUsuario = new usuario(nombreUsuario,dniUsuario)

    nuevoUsuario.mostrarDatosUsuario();

    nuevoTurnoUsuario = obtenerTurno();

    revisarRespuestaUsuario(nuevoTurnoUsuario);

 }

 while(nuevoTurnoUsuario.toLowerCase() != "no")




