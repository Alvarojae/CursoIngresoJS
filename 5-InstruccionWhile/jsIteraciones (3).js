function mostrar()
{
var contador=0
var clave = prompt("ingrese el número clave.");
while(clave!="utn750" && contador<2)
{
    clave = prompt("ingrese la clave nuevamente");
    console.log(++contador)
}

}//FIN DE LA FUNCIÓN
