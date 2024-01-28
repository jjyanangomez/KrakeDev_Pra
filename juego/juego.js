let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function(seleccionado){
    let valorAleatorio = generarElemento();
    let ruta = generarRuta(valorAleatorio);
    cambiarImagen("imgResultado",ruta);
    let resultado = determinarGanador(seleccionado,valorAleatorio);
    let mensaje = "";
    if(resultado==0){
        mensaje = "EMPATE";
        cambiarTexto("lblResultado",mensaje)
    }else if(resultado==1){
        mensaje = "GANASTE LA PARTIDA!!";
        cambiarTexto("lblResultado",mensaje)
        puntosUsuario = puntosUsuario +1;
        if(puntosUsuario == 5){
            cambiarTexto("lblResultado","GANASTE LA PARTIDA");
        }
    }else if(resultado==2){
        mensaje = "PERDISTE LA PARTIDA!!";
        cambiarTexto("lblResultado",mensaje)
        puntosComputador = puntosComputador +1;
        if(puntosComputador == 5){
            cambiarTexto("lblResultado","EL COMPUTADOR TE HA VENCIDO");
        }
    }
    
    cambiarTexto("lblUsuarioResult",puntosUsuario)
    cambiarTexto("lblCOmputadorResult",puntosComputador)
    console.log(mensaje);
}

limpiar = function(){
    puntosUsuario = 0;
    puntosComputador = 0;
    cambiarTexto("lblResultado","");
    cambiarTexto("lblUsuarioResult",0);
    cambiarTexto("lblCOmputadorResult",0);
    cambiarImagen("imgResultado","");

    
};