obtenerAleatorio = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorAleatorio;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio*3;
    numeroEntero = parseInt(numeroMultiplicado); //Entre 0 y 2
    valorAleatorio = numeroEntero+1;//Entre 1 y 3
    return valorAleatorio;
}
generarElemento = function(){
    let aleatorio = obtenerAleatorio()
    if(aleatorio == 1){
        return "piedra";
    }else if(aleatorio == 2){
        return "papel";
    }else{
        return "tijera"
    }
}
determinarGanador = function(eleccionJugador1,eleccionJugador2){
    if(eleccionJugador1 == eleccionJugador2){
        return 0;
    }
    else if(eleccionJugador1 =="piedra" && eleccionJugador2 == "tijera"){
        return 1;
    }
    else if(eleccionJugador1 =="papel" && eleccionJugador2 == "piedra"){
        return 1;
    }
    else if(eleccionJugador1 =="tijera" && eleccionJugador2 == "papel"){
        return 1;
    }else if(eleccionJugador2 =="piedra" && eleccionJugador1 == "tijera"){
        return 2;
    }
    else if(eleccionJugador2 =="papel" && eleccionJugador1 == "piedra"){
        return 2;
    }
    else if(eleccionJugador2 =="tijera" && eleccionJugador1 == "papel"){
        return 2;
    }     
}
generarRuta = function(nombre){
    return "./imagenes/"+nombre+".png";
    
}