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