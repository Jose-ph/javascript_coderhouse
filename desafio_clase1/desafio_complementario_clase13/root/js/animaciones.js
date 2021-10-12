//Aquí aparecerán las animaciones usando jquery.

let botonMostrar = $('#mostrar');

botonMostrar.click(()=>{

    $('#fila-servicios').fadeIn(1000,function(){

        $('#fila-servicios').fadeOut(800);

    });

});