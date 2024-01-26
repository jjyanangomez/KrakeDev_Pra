calcularTasaInteres = function(ingresoAnual){
    let valorTasa;
    if(ingresoAnual<300000){
        valorTasa = 16;
    }else if(ingresoAnual>300000 && ingresoAnual<500000){
        valorTasa = 15;
    }else if(ingresoAnual>500000 && ingresoAnual<1000000){
        valorTasa = 14;
    }else if(ingresoAnual>1000000 && ingresoAnual<2000000){
        valorTasa = 13;
    }else if(ingresoAnual>2000000){
        valorTasa = 12;
    }
    return valorTasa;
}
calcularCapacidadPago = function(edad, ingresos, egresos){
    let capacidad;
    if(edad>50){
        capacidad = 0.3*(ingresos - egresos)
    }else{
        capacidad = 0.4*(ingresos - egresos);
    }
    return capacidad;
}
calcularDescuento = function(precio, cantidad){
    let totalPrecio = precio*cantidad;
    let valorTotalResultado;
    if(cantidad<3){
        valorTotalResultado = totalPrecio;
    }else if(cantidad>=3 && cantidad<=5){
        let aux;
        aux = totalPrecio * 0.02;
        valorTotalResultado = totalPrecio -aux;
    }else if(cantidad>=6 && cantidad<=11){
        let aux;
        aux = totalPrecio * 0.03;
        valorTotalResultado = totalPrecio -aux;
    }else{
        let aux;
        aux = totalPrecio * 0.04;
        valorTotalResultado = totalPrecio - aux;
    }
    return valorTotalResultado;
}
determinarColesterolLDL = function(nivelColesterol){
    if(nivelColesterol<100){
        return "Óptimo";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        return "Casi óptimo";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        return "Límite superior del rango normal";
    }else if(nivelColesterol>=160 && nivelColesterol<=189){
        return "Alto";
    }else{
        return "Muy alto";
    }
}
validadClave  = function(clave){
    if(clave.lenght >= 8 && clave.lenght<=16){
        return true;
    }else{
        return false;
    }
}
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
darPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso = function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica > 90 || notaFisica > 90) && notaGeometria>80){
        return true;
    }else{
        return false;
    }
}
dejarSalir = function(notaMatematica,notaFisica,notaGeometria){
    if((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica){
        return true;
    }else{
        return false;
    }
}