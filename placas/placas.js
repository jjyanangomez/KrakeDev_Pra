validarPlaca = function(){
    let valorPlaca = recuperarTexto("txtPlaca");
    console.log(valorPlaca);
    let erroresEstructura = validarEstructura(valorPlaca);
    let valorProvincia;
    let valorTipoVehiculo;
    let diaPicoYPlaca;
    mostrarTexto("lblValida","");
    if(erroresEstructura == null){
        mostrarTexto("lblValida","ESTRUCTURA VALIDA");
        valorProvincia = obtenerProvincia(valorPlaca);
        valorTipoVehiculo = obtenerTipoVehiculo(valorPlaca);
        diaPicoYPlaca = obtenerDiaPicoYPlaca(valorPlaca);
        if (valorProvincia !== null) {
            mostrarTexto("lblProvincia",'PROVINCIA' + "  " + valorProvincia.toUpperCase());
            mostrarTexto("lblTipo", 'TIPO ' + valorTipoVehiculo);
            mostrarTexto("lblPico",'PICO Y PLACA' + "  " + diaPicoYPlaca);
        } else {
            mostrarTexto("lblProvincia","PROVINCIA NO ENCONTRADA");
        }
    }else{
        mostrarTexto("lblError1","ESTRUCTURA INCORRECTA: "+erroresEstructura);
    }
};
limpiar = function (){
    document.getElementById("txtPlaca").value = '';
    document.getElementById("lblError1").innerText = '';
    document.getElementById("lblValida").innerText = '';
};