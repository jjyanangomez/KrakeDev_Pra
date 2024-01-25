calcularPromedioNotas=function(){
    let valorNota1 = recuperarFloat("txtNota1");
    let valorNota2 = recuperarFloat("txtNota2");
    let valorNota3 = recuperarFloat("txtNota3");
    let promedio = calcularPromedio(valorNota1,valorNota2,valorNota3);
    let valorDosDecimales = promedio.toFixed(2);

    if(valorDosDecimales>7){
        mostrarImagen("imgResultado","./imagenes/exito.gif");
    }else{
        mostrarImagen("imgResultado","./imagenes/fracaso.gif");
    }
    console.log(promedio.toFixed(2));
}