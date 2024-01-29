//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 1;
let coincidencias = 1;
let errores = 0;
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
    let existeError = false;
    let palabra = recuperarTexto("txtSecreta");
    if(palabra.length ==5){
        for(let i=0;i<palabra.length;i++){
            letra = palabra.charAt(i);
            if(!esMayuscula(letra)){
                existeError =true;
            }
        }
    }
    if(existeError){
        alert("Debe de ingresar una palabra 5 letras mayusculas");
    }else{
        palabraSecreta = palabra;
    }
}
mostrarLetra = function(letra, posicion){
    if(posicion==0){
        mostrarTexto("div0",letra);
    }else if(posicion==1){
        mostrarTexto("div1",letra);
    }else if(posicion==2){
        mostrarTexto("div2",letra);
    }else if(posicion==3){
        mostrarTexto("div3",letra);
    }else if(posicion==4){
        mostrarTexto("div4",letra);
    }
}
validar = function(letra){
    let letrasEncontradas;
    let valor;
    let coincidenciasAux = coincidencias;
    for(let i=0;i<palabraSecreta.length;i++){
        valor = palabraSecreta.charAt(i);
        if(valor == letra){
            coincidencias++;
            mostrarLetra(valor,i);
            letrasEncontradas++;
        }
    }
    if(coincidenciasAux == coincidencias){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}
ingresarLetra = function(){
    if(coincidencias==5){
        //alert("HA GANADO");
        mostrarImagen("ahorcadoImagen","ganador.gif");
    }
    if(intentos==10){
        //alert("HAS PERDIDO");
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
    intentos++;
}
mostrarAhorcado = function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png");
    }else if(errores == 2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png");
    }else if(errores == 3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png");
    }else if(errores == 4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png");
    }else if(errores == 5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png");
    }else if(errores == 6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png");
    }else if(errores == 7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png");
    }else if(errores == 8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png");
    }else if(errores == 9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png");
    }
}