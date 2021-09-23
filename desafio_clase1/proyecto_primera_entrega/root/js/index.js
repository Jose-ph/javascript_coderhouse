//Esta función muestra los productos disponibles en el menú
//para poder ser comprados mediante su id,
function mostrarMenu (productos,menu){

    productos.forEach(producto => {

        menu += `
                ${producto.id} ${producto.nombre} ${producto.envase} ${producto.peso}
                
                `
    });

    menu+= "Elige un número para comprar ese producto, o salir para terminar";
    let opcionUsuario = prompt(menu);
    return opcionUsuario; 
    
}



    productos = [

        {id : 1,nombre:"Miel Pura",peso:"500g", envase:"plástico", precio:250, stock:50},
        {id :2,nombre:"Miel Pura",peso:"500g", envase:"vidrio", precio:350, stock:60},
        {id : 3,nombre:"Miel Pura",peso:"1000g", envase:"plástico", precio:500, stock:90},
        {id : 4,nombre:"Miel Pura",peso:"1000g", envase:"vidrio", precio:750, stock:80},


    ];



    const menu  = "Estos son los productos disponibles ";
    
    
    do{

       let OPCION ;
        OPCION = mostrarMenu(productos,menu);



    }
   
    while(OPCION != "salir")