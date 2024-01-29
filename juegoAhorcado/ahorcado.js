//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter){
    let valorAscii = caracter.charCodeAt(0);
    if(valorAscii>=65 && valorAscii<=90){
        return true;
    }else{
        return false;
    }
}