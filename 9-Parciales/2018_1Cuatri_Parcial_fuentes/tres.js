function mostrar()
{
    dato = prompt ("precio")
    dato1 = prompt ("porcentaje de descuento")
    dato = parseInt (dato)
    dato1 = parseInt (dato1)
    descuento = dato*(dato1/100)
    precioFinal= dato-descuento 
    document.getElementById("elPrecioFinal").value = precioFinal ;
}
