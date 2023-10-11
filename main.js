function presentacion () {
    for (j = 0; j < 2 ; j++){
        let nombre = prompt ("Hola! Coloque su nombre para iniciar");

        
        
        if (nombre === ""){
            alert ("Coloque un nombre para continuar");
            j = 0;
        } else {
            alert (`Bienvenido ${nombre} a concesionaria Impagable`);
            j++;
        }
    }
}

function eleccionCompra () {    
    let producto = prompt ("Que vehiculo desearía comprar? Coloque 1 si desea comprar un Lamborghini o coloque 2 si desea un Ferrari");
    if (producto === "1" || producto === "Lamborghini" || producto === "lamborghini"){
        return confirm ("El precio del Lamborghini es un ojo de la cara, confirma su compra?");
    } else if (producto === "2" || producto === "Ferrari" || producto === "ferrari") {
        return confirm ("El precio del Ferrari es mucho muy caro, confirma su compra?");
    } else {
        return alert ("La opción elegida no es válida")
    }
}

function finalizacionCompra () {
    if (eleccionCompra () == false){
        return alert ("Muchas gracias por su visita");
    } else {
        for (let i = 0; i < 2 ; i++){
            let direccion = prompt ("ingrese su dirección para poder realizar el envío del pedido");
            if (direccion === ""){
                alert ("Coloque una dirección válida");
                i = 0;
            } else {            
            alert (`Su artículo sera enviado a: ${direccion}`);
            alert ("Muchas gracias por su compra");
            i++;
            }   
        }
    }
}

presentacion();
finalizacionCompra();
