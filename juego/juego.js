jugar = function(seleccionado){
    let valorAleatorio = generarElemento();
    let ruta = generarRuta(valorAleatorio);
    let resultado = determinarGanador(seleccionado,valorAleatorio);
    let mensaje = "";
    if(resultado==0){
        mensaje = "EMPATE"
    }else if(resultado==1){
        mensaje = "GANASTE LA PARTIDA!!"
    }else if(resultado==2){
        mensaje = "PERDISTE LA PARTIDA!!"
    }
    console.log(mensaje);
}