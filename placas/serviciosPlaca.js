validarEstructura = function(placa){
    let mensaje="";
    let longitud = placa.length;
    console.log(longitud);
    let caracterPlaca1 = esMayuscula(placa[0]);
    let caracterPlaca2 = esMayuscula(placa[1]);
    let caracterPlaca3 = esMayuscula(placa[2]);
    let caracterPlaca4 = esGuion(placa[3]);
    let caracterPlaca5 = esDigito(placa[4]);
    let caracterPlaca6 = esDigito(placa[5])
    let caracterPlaca7 = esDigito(placa[6])
    if(!(longitud == 7 || longitud == 8)){
        mensaje = "La placa ingresada debe de contar con 7 o 8 caracteres";
        
        return mensaje;
    }
    if(!(caracterPlaca1 && caracterPlaca2 && caracterPlaca3)){
        mensaje = "La placa debe de contar con sus tres primeras letras deben ser mayusculas";
        return mensaje;
    }
    if(!(caracterPlaca4)){
        mensaje = "El cuarto caracter de la placa debe ser un guión";
        return mensaje;
    }
    if(!(caracterPlaca5 && caracterPlaca6 && caracterPlaca7)){
        mensaje = "La placa debe de contar con sus tres ultimos digitos sean numeros";
        return mensaje;
    }
    if (longitud === 8 && !esDigito(placa[7])) {
        mensaje = "La longitud es de 8 asegurate que el ultimo digito sea un numero";
        return mensaje;
    }
    return null;
}
obtenerProvincia = function (placa) {
    let primeraLetra = placa.charAt(0);
    let mensaje;
    let provincia;
    if (primeraLetra === "w") {
        mensaje = "La primera letra no es mayúscula";
        return mensaje;
    } else if (primeraLetra === "A") {
        provincia = "Azuay";
    } else if (primeraLetra === "B") {
        provincia = "Bolívar";
    } else if (primeraLetra === "U") {
        provincia = "Cañar";
    } else if (primeraLetra === "C") {
        provincia = "Carchi";
    } else if (primeraLetra === "X") {
        provincia = "Cotopaxi";
    } else if (primeraLetra === "H") {
        provincia = "Chimborazo";
    } else if (primeraLetra === "O") {
        provincia = "El Oro";
    } else if (primeraLetra === "E") {
        provincia = "Esmeraldas";
    } else if (primeraLetra === "W") {
        provincia = "Galápagos";
    } else if (primeraLetra === "G") {
        provincia = "Guayas";
    } else if (primeraLetra === "I") {
        provincia = "Imbabura";
    } else if (primeraLetra === "L") {
        provincia = "Loja";
    } else if (primeraLetra === "R") {
        provincia = "Los Ríos";
    } else if (primeraLetra === "M") {
        provincia = "Manabí";
    } else if (primeraLetra === "V") {
        provincia = "Morona Santiago";
    } else if (primeraLetra === "N") {
        provincia = "Napo";
    } else if (primeraLetra === "S") {
        provincia = "Pastaza";
    } else if (primeraLetra === "P") {
        provincia = "Pichincha";
    } else if (primeraLetra === "K") {
        provincia = "Sucumbíos";
    } else if (primeraLetra === "Q") {
        provincia = "Orellana";
    } else if (primeraLetra === "T") {
        provincia = "Tungurahua";
    } else if (primeraLetra === "Z") {
        provincia = "Zamora Chinchipe";
    } else if (primeraLetra === "Y") {
        provincia = "Santa Elena";
    } else {
        mensaje = "Provincia no encontrada para la letra proporcionada";
    }
    return provincia;
};

obtenerTipoVehiculo = function(placa){
    let segundaLetra = placa.charAt(1);
    let tipoVehiculo;
    if (segundaLetra === "E") {
        tipoVehiculo = "GUBERNAMENTAL"
    } else if (segundaLetra === "X"){
        tipoVehiculo = "USO OFICIAL"
    } else if (segundaLetra === "S"){
        tipoVehiculo = "GOBIERNO PROVINCIAL"
    } else if (segundaLetra === "M"){
        tipoVehiculo = "MUNICIPAL"
    } else if (segundaLetra === "A" || segundaLetra === "Z") {
        tipoVehiculo = "COMERCIALES"
    } else {
        tipoVehiculo = "PARTICULAR"
    }
    return tipoVehiculo;
};
obtenerDiaPicoYPlaca = function(placa){
    let ultimoDigito = placa.charAt(6)
    //console.log(ultimoDigito);
    let dia;
    if(ultimoDigito == 1 || ultimoDigito == 2){
        dia = "LUNES";
    } else if (ultimoDigito == 3 || ultimoDigito == 4){
        dia = "MARTES";
    } else if(ultimoDigito == 5  || ultimoDigito == 6){
        dia = "MIERCOLES";
    } else if(ultimoDigito == 7 || ultimoDigito == 8){
        dia = "JUEVES";
    } else if(ultimoDigito == 9 || ultimoDigito == 0){
        dia = "VIERNES"
    };
    return dia;
};