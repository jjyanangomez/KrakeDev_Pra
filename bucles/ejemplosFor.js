mostrarNumero = function(){
    console.log("Antes del for");
    for(let i=0;i<4; i++){
        console.log(i);
    }
    console.log("Despues del for");
}
mostrarNumero2 = function(){
    console.log("Antes del for");
    for(let indice=0;indice<=5; indice++){
        console.log(indice);
    }
    console.log("Despues del for");
}
mostrarPares = function(){
    console.log("Antes del for");
    for(let x=2;x<=10; x+=2){
        console.log(x);
    }
    console.log("Despues del for");
}
/*mostrarPares = function(){
    console.log("Antes del for");
    for(let x=1;x<=10; x++){
        if(x%2 == 0){
            console.log(x);
        }
        
    }
    console.log("Despues del for");
}*/
mostrarInverso = function(){
    console.log("Antes del for");
    for(let i=10;i>=0; i--){
        console.log(i);
    }
    console.log("Despues del for");
}
hackearNasaPelis = function(){
    for(let porcentaje=0;porcentaje<=100;porcentaje+=10){
        console.log("hackeando nasa "+porcentaje+"%");
    }
    console.log("La nasa ha sido hackeada XD");
}
//Presentar los numeros impares
mostrarImpares = function(){
    console.log("Antes del for");
    for(let i=1;i<=21; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
    console.log("Despues del for");
}