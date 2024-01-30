obtenerAleatorio = function(){
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
    let aleatorios =[];
    let valorIngresado = recuperarInt("txtLimite");
    if(!isNaN(valorIngresado)){
        if(!(valorIngresado>5 && valorIngresado<=20)){
            alert("El numero ingresado debe estar en el rango de 5 y 20");
        }else{
            for(let i=0;i<valorIngresado;i++){
                console.log(i);
                let valor = obtenerAleatorio();
                aleatorios.push(valor);
            }
            mostrarResultado(aleatorios);
        }
    }else{
        alert("Por favor ingrese un número");
    }
}
mostrarResultado = function(arregloNumeros){
    let valores;
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table><tr><th>VALORES</th></tr>";
    for(let i = 0; i < arregloNumeros.length; i++){
        valores = arregloNumeros[i];
        contenidoTabla+= "<tr><td>";
        contenidoTabla+=valores;
        contenidoTabla+= "</td></tr>";
    };
    contenidoTabla+= "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}