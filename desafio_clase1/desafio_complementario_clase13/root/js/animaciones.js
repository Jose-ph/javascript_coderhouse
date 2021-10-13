//Aquí aparecerán las animaciones usando jquery.

let botonMostrar = $('#mostrar');

//Animaciones de las cards
botonMostrar.click(()=>{

    $('#fila-servicios').fadeIn(1000,function(){

        $('#fila-servicios').fadeOut(1100);
        $('#img-logo').toggle("fast");

        $('#img-carrito').css("width", "5%");

        $('#img-carrito').fadeIn().fadeOut();
       


    });

});