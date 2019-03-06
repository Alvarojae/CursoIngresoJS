function mostrar()
{
    var precio;
    var descuento;
    var iva;
    var descuentoDinero;
    var descuentoTotal;
    var ivaTotal
    iva=21;
    precio=prompt("ingrese el precio");
    descuento=prompt("ingrese el porcentaje de descunto");
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    descuentoDinero=(precio*descuento/100);
    descuentoTotal=(precio-(precio*descuento/100));
    ivaTotal=((precio*iva)/100) + descuentoTotal
     alert("el decuento en dinero es: " + descuentoDinero + "   precio con el descuento : " + descuentoTotal +" el iva es:"+ iva);
    document.getElementById("elPrecioFinal").value=ivaTotal
   
}


