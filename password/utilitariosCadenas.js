esMayuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if(valorAscii>=65 && valorAscii<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    //if((valorAscii>=95 && valorAscii<=122)||(valorAscii>=160 && valorAscii<=163)||(valorAscii>=130)){
    if((valorAscii>=95 && valorAscii<=122)||(valorAscii>=130 && valorAscii<=163)){
        return true;
    }else{
        return false;
    }
}
esDigito = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if((valorAscii>=48 && valorAscii<=57)){
        return true;
    }else{
        return false;
    }
}
esGuion = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if((valorAscii>=45 || valorAscii<=95)){
        return true;
    }else{
        return false;
    }
}
esCaracter = function (caracter){
    let valorCaracter = caracter.charAt(0);
    if (valorCaracter == '*' || valorCaracter == '-' || valorCaracter == '_' ) {
        return true;
    } else {
        return false;
    }
};
