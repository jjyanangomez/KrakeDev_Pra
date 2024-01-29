ejercicioPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejercicioPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let resultado = invertirCadena(mensaje);
    cambiarTexto("lblResultado",resultado);
}
recorrerCadena = function(cadena){
    //0123456
    //Juanito
    let caracter;

    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion);
    }
    for(let posicion=0;posicion<=cadena.length-1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("CHARACTER "+caracter+" posicion "+posicion);
    }
}
invertirCadena = function(cadena){
    let resultado="";
    for(let posicion=cadena.length;posicion>=0;posicion--){
        caracter = cadena.charAt(posicion);
        resultado = resultado+caracter;
    }
    return resultado;
}