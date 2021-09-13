//Calculadora de tiempo promedio en relación a la cantidad de turnos asignados.

function calcularTiempoDeEspera(turnosAsignados){

    
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


let nuevoTurnoUsuario;
let cantidadDeTurnos;
let tiempoDeEspera;

nuevoTurnoUsuario = obtenerTurno();

revisarRespuestaUsuario(nuevoTurnoUsuario);



