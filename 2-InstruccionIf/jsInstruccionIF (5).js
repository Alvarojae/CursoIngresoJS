function mostrar()
{
//tomo la edad  
dato = document.getElementById("edad").value ;
dato = parseInt (dato);
if (! (dato > 12 && dato <18 ))
{
   alert ("No sos Adolescente");
}

}//FIN DE LA FUNCIÓN