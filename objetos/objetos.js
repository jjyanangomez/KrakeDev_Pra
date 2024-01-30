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