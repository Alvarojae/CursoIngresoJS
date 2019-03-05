function mostrar()
{
var dato
var dato1

//------------------
dato=prompt("primer numero")
dato1=prompt("segundo numero")
dato=parseInt(dato)
dato1=parseInt(dato1)

if(dato==dato1)
{
    alert(dato +""+""+ dato1)
}else
{
    if(dato>dato1)
    {
        alert(dato-dato1)
    
    }else
    {
        alert(dato+dato1)
    }

}

if(dato+dato1>10)
{
    alert( "la suma es " + (dato+dato1) +" y supero el 10")
}


}






