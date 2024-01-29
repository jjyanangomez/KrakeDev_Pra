//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
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
            letra = palabra.charAt(i);
            if(!esMayuscula(letra)){
                alert("Debe de ingresar una palabra 5 letras mayusculas");
            }else{
                palabraSecreta = palabra;
            }
        }
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
    for(let i=0;i<palabraSecreta.length;i++){
        valor = palabraSecreta.charAt(i);
        if(valor == letra){
            mostrarLetra(valor,i);
            letrasEncontradas++;
        }
    }
}