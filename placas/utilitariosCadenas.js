esMayuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if(valorAscii>=65 && valorAscii<=90){
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
