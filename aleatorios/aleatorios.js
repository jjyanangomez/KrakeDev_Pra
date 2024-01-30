let aleatorios =[];
obtemerAleatorio = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorAleatorio;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio*100;
    numeroEntero = parseInt(numeroMultiplicado); //Entre 0 y 99
    valorAleatorio = numeroEntero+1;//Entre 1 y 100
    return valorAleatorio;
}
generarAleatorios = function(){
    let valorIngresado = recuperarInt("txtLimite");
    if(!isNaN(valorIngresado)){
        if(!(valorIngresado>5 && valorIngresado<=20)){
            alert("El numero ingresado debe estar en el rango de 5 y 20");
        }else{
            for(let i=0;i<valorIngresado+1;i++){
                console.log(i);
            }
        }
    }else{
        alert("Por favor ingrese un número");
    }
}