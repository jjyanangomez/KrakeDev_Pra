let clientes =[
    {cedula:"123123123",nombre:"Pedro",edad:20},
    {cedula:"56431537",nombre:"Juan",edad:50},
    {cedula:"894316725",nombre:"Andres",edad:22}
]
//metodos para crear al cliente
crearCliente = function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarInt("txtEdad");
    let nuevoCliente ={};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);
}
agregarCliente = function(cliente){
    let resultadoCliente = buscarCliente(cliente.cedula);
    if(resultadoCliente==null){
        clientes.push(cliente);
        alert("Cliente agregado");
        mostrarClientes();
    }else{
        alert("Ya existe el cliente con la cedula: "+cliente.cedula);
    }
}
//metodos para buscar al cliente
ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBUsqueda");
    let resultadoCliente = buscarCliente(valorCedula);
    if(resultadoCliente==null){
        alert("Cliente no encontrado");
    }else{
        mostrarTextoEnCaja("txtNombre",resultadoCliente.nombre);
        mostrarTextoEnCaja("txtCedula",resultadoCliente.cedula);
        mostrarTextoEnCaja("txtEdad",resultadoCliente.edad);
    }
}
buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i=0;i<clientes.length;i++){
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}
//metodos para presentar a los clientes
mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla ="<table><tr>"+
    "<th>CÉDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente = clientes[i];
        contenidoTabla+=
        "<tr>"
        +"<td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"        
        +"</tr>";
    }
    contenidoTabla +="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
//metodos para modificar al cliente
modificarCliente = function(cliente){
    let resultadoCliente = buscarCliente(cliente.cedula);
    if(resultadoCliente!=null){
        resultadoCliente.nombre = cliente.nombre;
        resultadoCliente.edad = cliente.edad;
    }
}
guardarCambios = function(){
    let valorNombre = recuperarTexto("txtNombre");
    let valorCedula = recuperarTexto("txtCedula");
    let valorEdad = recuperarInt("txtEdad");
    let datosCliente ={};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes();
}