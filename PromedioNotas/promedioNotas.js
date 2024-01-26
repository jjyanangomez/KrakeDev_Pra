calcularPromedioNotas=function(){
    let valorNota1 = recuperarFloat("txtNota1");
    let valorNota2 = recuperarFloat("txtNota2");
    let valorNota3 = recuperarFloat("txtNota3");
    let promedio = calcularPromedio(valorNota1,valorNota2,valorNota3);
    let valorDosDecimales = promedio.toFixed(2);
    if(valorDosDecimales > 0 && valorDosDecimales < 5){
        mostrarTexto("lblMensaje","REPROBADO "+valorDosDecimales);
        mostrarImagen("imgResultado","./imagenes/reprobado.gif");
    }else if(valorDosDecimales>=5 && valorDosDecimales<=8){
        mostrarImagen("imgResultado","./imagenes/buen.gif");
        mostrarTexto("lblMensaje","BUEN TRABAJO: "+valorDosDecimales);
    }else if(valorDosDecimales>8 && valorDosDecimales<=10){
        mostrarImagen("imgResultado","./imagenes/exito.gif");
        mostrarTexto("lblMensaje","EXCELENTE: "+valorDosDecimales);
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS");
        mostrarImagen("imgResultado","./imagenes/no.gif");
    }

    /*if(valorDosDecimales>7){
        mostrarImagen("imgResultado","./imagenes/exito.gif");
    }else{
        mostrarImagen("imgResultado","./imagenes/fracaso.gif");
    }*/
    console.log(promedio.toFixed(2));
}