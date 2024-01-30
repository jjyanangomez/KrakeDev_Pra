probarAtributos = function(){
    let persona ={
        nombre : "Pedro",
        apellido: "Morales",
        edad : 24,
        estadoVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estadoVivo){
        console.log("Esta vivo");
    }else{
        console.log("Esta muerto");
    }
}
crearProducto = function(){
    let producto1 = {
        nombre: "Corona personal",
        precio: 2.20,
        stock: 8
    }
    let producto2 = {
        nombre: "Passport",
        precio: 19.80,
        stock: 17
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock>producto2.stock){
        console.log("El producto 1 tiene mayor Stock");
    }else if(producto2.stock>producto1.stock){
        console.log("El producto 2 tiene mayor Stock");
    }else{
        console.log("Ambos productos tienen el mismo stock");
    }
}
modificarAtributos = function(){
    let cuenta ={
        numero: "532462879",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente = function(){
    let cliente ={
        cedula: "110534076",
        nombre : "Juan",
    }
    let cliente1={}
    cliente1.nombre ="Romeo",
    cliente1.apellido = "Salcedo",
    cliente1.cedula ="123456789"
}
probarIncrementarSaldo = function(){
    let cta ={
        numero: "532462879",
        saldo: 34.0
    }
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
incrementarSaldo = function(cuenta,monto){
    cuenta.saldo+=monto;
}

probarDeterminarMayor = function(){
    let per1 ={
        nombre : "Pedro",
        edad : 24,
    }
    let per2 ={
        nombre : "Maria",
        edad : 26,
    }
    let mayor = determinarMayor(per1,per2);
    if(mayor!=null){
        console.log("El mayor es: "+mayor.nombre);
    }
}
determinarMayor = function(persona1,persona2){
    if(persona1.edad>persona2.edad){
        return persona1;
    }else if(persona2.edad>persona1.edad){
        return persona2;
    }else{
        return null;
    }
}