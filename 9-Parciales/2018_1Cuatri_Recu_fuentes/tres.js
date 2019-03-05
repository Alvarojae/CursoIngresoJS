function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;
    
    precio=prompt("ingrese el precio");
    porcentaje=prompt("ingrese eñ porcentaje de descuento");
    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);

    precioFinal=precio-(precio*porcentaje/100);

    document.getElementById("elPrecioFinal").value=precioFinal;
}


