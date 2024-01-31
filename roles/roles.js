let esNuevo = false;
let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1105347969",nombre:"Juan",apellido:"Yanangomez",sueldo:900.0}
]
mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleado();
    //Desabilitar componentes
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}
mostrarEmpleado = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla ="<table class='neon-table'><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleado;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado = empleados[i];
        contenidoTabla+=
        "<tr>"
        +"<td>"+elementoEmpleado.cedula+"</td>"
        +"<td>"+elementoEmpleado.nombre+"</td>"
        +"<td>"+elementoEmpleado.apellido+"</td>"  
        +"<td>"+elementoEmpleado.sueldo+"</td>"        
        +"</tr>";
    }
    contenidoTabla +="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
buscarEmpleado = function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for(let i=0;i<empleados.length;i++){
        elementoEmpleado = empleados[i];
        if(elementoEmpleado.cedula == cedula){
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}
agregarEmpleado = function(empleado){
    let resultadoEmpleado = buscarEmpleado(empleado.cedula);
    if(resultadoEmpleado==null){
        empleados.push(empleado);
        return true;
    }else{
        return false;
    }
}
guardar = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let AuxiliarSueldo = recuperarFloat("txtSueldo");
    let valorSueldo = parseFloat(AuxiliarSueldo);
    if(valorCedula=="" || valorNombre =="" || valorApellido=="" ||AuxiliarSueldo.length === 0){
        alert('Todos los campos son obligatorios');
        return false;
    }
    // Validar Cedula
    if (valorCedula.length !== 10) {
        alert('La cedula debe tener 10 caracteres');
        return false;
    }

    for (let i = 0; i < valorCedula.length; i++) {
        if (!esDigito(valorCedula[i])) {
            alert('La cedula debe tener solo digitos');
            return false;
        }
    }

    // Validar Nombre
    if (valorNombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        return false;
    }

    for (let i = 0; i < valorNombre.length; i++) {
        if (!esMayuscula(valorNombre[i])) {
            alert('Todos los caracteres del nombre deben ser Mayusculas');
            return false;
        }
    }

    // Validar Apellido
    if (valorApellido.length < 3) {
        alert('El apellido debe tener al menos 3 caracteres');
        return false;
    }

    for (let i = 0; i < valorApellido.length; i++) {
        if (!esMayuscula(valorApellido[i])) {
            alert('Todos los caracteres del apellido deben ser Mayusculas');
            return false;
        }
    }

    // Validar Sueldo
    if (valorSueldo < 400 || valorSueldo > 5000 || isNaN(valorSueldo)) {
        alert('El sueldo debe estar entre 400 y 5000 y debe ser un numero valido');
        return false;
    }
    if(esNuevo == true){
        let empleado =[];
        empleado.cedula = valorCedula;
        empleado.nombre = valorNombre;
        empleado.apellido = valorApellido;
        empleado.sueldo = valorSueldo;
        let resultadoEmpleado = agregarEmpleado(empleado);
        if(resultadoEmpleado){
            mostrarEmpleado();
            limpiarDesabilitar();
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            esNuevo = false;
        }else{
            alert("YA EXISTE UN EMPLEADO CON CEDULA: "+empleado.cedula);
        }
    }else{
        let editarEmpleado = buscarEmpleado(valorCedula);
        if (editarEmpleado) {
            // Validar los campos antes de modificar
            let nuevoNombre = recuperarTexto("txtNombre");
            let nuevoApellido = recuperarTexto("txtApellido");
            let nuevoSueldo = recuperarTexto("txtSueldo");

            if (nuevoNombre && nuevoApellido && nuevoSueldo) {
                editarEmpleado.nombre = nuevoNombre;
                editarEmpleado.apellido = nuevoApellido;
                editarEmpleado.sueldo = nuevoSueldo;
                alert('EMPLEADO MODIFICADO EXITOSAMENTE');
                mostrarEmpleado();
                limpiarDesabilitar();
            } else {
                alert('Los campos deben contener valores válidos');
            }
        } else {
            alert('No se encontró un empleado con la cedula ' + empleado.cedula);
        }
        
    }
}
limpiarDesabilitar = function(){
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    //Limpiar las cajas de texto
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    esNuevo=false;
}
ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let resultadoEmpleado = buscarEmpleado(valorCedula);
    if(resultadoEmpleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
        mostrarTextoEnCaja("txtNombre",resultadoEmpleado.nombre);
        mostrarTextoEnCaja("txtApellido",resultadoEmpleado.apellido);
        mostrarTextoEnCaja("txtCedula",resultadoEmpleado.cedula);
        mostrarTextoEnCaja("txtSueldo",resultadoEmpleado.sueldo);
    }
}
buscarPorRol = function(){
    let valorCedula = recuperarTexto("txtBusquedaCedulaRol");
    let resultadoEmpleado = buscarEmpleado(valorCedula);
    if(resultadoEmpleado==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTexto("infoCedula",resultadoEmpleado.cedula);
        mostrarTexto("infoNombre",resultadoEmpleado.nombre+" "+resultadoEmpleado.apellido);
        mostrarTexto("infoSueldo",resultadoEmpleado.sueldo);
    }
}
calcularAporteEmpleado= function(sueldo){
    let aporte = sueldo*9.45/100;
    return aporte.toFixed(2);
}
calcularValorAPagar = function(sueldo,aporte,descuento){
    let resultado = sueldo-aporte-descuento
    return resultado.toFixed(2);
}
calcularRol = function(){
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");
    if(!isNaN(descuentos)){
        let aporteEmpleado = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporteEmpleado);
        let valorAPagar = calcularValorAPagar(sueldo, aporteEmpleado, descuentos);
        mostrarTexto("infoPago", valorAPagar);
    }else{
        alert("Ingrese el descuento");
    }
    
}