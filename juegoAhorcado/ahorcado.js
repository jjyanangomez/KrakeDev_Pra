//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if(valorAscii>=65 && valorAscii<=90){
        return true;
    }else{
        return false;
    }
}
guardarPalabra = function(){
    let letra;
    let palabra = recuperarTexto("txtSecreta");
    if(palabra.length ==5){
        for(let i=0;i<palabra.length;i++){
            letra = cadena.charAt(i);
            if(!esMayuscula(letra)){
                alert("Debe de ingresar una palabra 5 letras mayusculas");
            }
        }
    }
}