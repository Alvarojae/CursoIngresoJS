function mostrar()
{
//tomo la edad  
dato = document.getElementById("edad").value ;
dato = parseInt (dato);
if (dato >= 18)
 {
  alert ("mayor de edad");
   }
else if (dato < 18)
{
    alert ("menor de edad");
     }

}//FIN DE LA FUNCIÓN