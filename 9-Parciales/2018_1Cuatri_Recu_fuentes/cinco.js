function mostrar() 
{
    var dia;
    var alerta;
  
    //-----------------------
    dia=prompt("ingresar un dia");

    switch (dia) 
    {
      case "lunes":
      case "martes":
      case "miercoles":
      case "jueves":
      case "viernes":
      alerta=("a trabajar");

      break;
      case "sabado":
      case "domingo":
      alerta=("buen finde");
      
      break;
      default:
      alerta=("dia no valido");
        break;
    
      }
  
    alert(alerta);
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   /* var importe1;
    var importe2;
    var importe3;
    var importe4;
    var mayor;
    importe1 = prompt("Ingresar primer Importe")
    importe2 = prompt("Ingresar segundo Importe")
    importe3 = prompt("Ingresar tercer Importe")
    importe4 = prompt("Ingresar cuarto Importe")
    importe1 = parseInt (importe1);
    importe2 = parseInt (importe2);
    importe3 = parseInt (importe3);
    importe4 = parseInt (importe4);
    importeTotal = (importe1+importe2+importe3+importe4)
 //mayor
    if (importe1 >= importe2 && importe1 >= importe3 && importe1 >= importe4)
    {
        mayor = importe1
    }
    
      if (importe2 >= importe1 && importe2 >= importe3 && importe2 >= importe4)
      {
        mayor = importe2
      }

        if (importe3 >= importe1 && importe3 >= importe2 && importe3 >= importe4)
        {
         mayor = importe3
        }
        
          if (importe4 >= importe1 && importe4 >= importe2 && importe4 >= importe3)
          {
            mayor = importe4 
          }//si es mayor
        
          alert ("el importe mas grande es " + mayor)

    //descuentos
    if (importeTotal > 100)
    {
        alert("su importe final es " + (importeTotal*0.90))
    }else
     {
        if (importeTotal > 50)
        {
            alert("su importe final es " + (importeTotal*0.95))
        }else
            {
             if(importeTotal < 50)
              {
                alert("su importe final es " + (importeTotal*1.15))
              }
            }
    
    

    } //descuento


}*/
