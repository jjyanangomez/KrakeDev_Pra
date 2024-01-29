let mensajeError = "";
ejecutarValidacion = function(){
    let contrasena = recuperarTexto("txtContraseña");
    let resultado = validarPassword(contrasena);
    mostrarTexto("lblResultado",resultado);
}
validarPassword = function(password){
    let mensajeError = "";
    if(!(password.length >= 8 && password.length <= 16)){
        mensajeError = mensajeError+"La contraseña debe tener minimo 8 caracteres y un maximo de 16\n";
        existeError = true;
    }if(contarMayusculas(password)<1){
        mensajeError = mensajeError+"La contraseña debe tener al menos una mayuscula\n";
        existeError = true;
    }if(contarDigito(password)<1){
        mensajeError = mensajeError+"La contraseña debe tener al menos una digito o número\n";
        existeError = true;
    }if(contarCaracteresEspeciales(password)<3){
        mensajeError = mensajeError+"La contraseña debe tener al menos 3 caracteres especiales (-,_,*)\n";
        existeError = true;
    }
    return mensajeError;
}
contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas = 0;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
    return contadorMayusculas;
}
contarDigito = function(cadena){
    let letra;
    let contadorDigito = 0;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esDigito(letra)){
            contadorDigito++;
        }
    }
    console.log(contadorDigito);
    return contadorDigito;
}
contarCaracteresEspeciales = function(cadena){
    let letra;
    let contadorGuion = 0;
    for(let i=0;i<cadena.length;i++){
        letra = cadena.charAt(i);
        if(esCaracter(letra)==true){
            contadorGuion++;
        }
    }
    console.log(contadorGuion);
    return contadorGuion;
}
