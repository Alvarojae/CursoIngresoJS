function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
var alerta;
switch(mesDelAño)
{
    case "Febrero":
    
     alerta =  (" tiene 28 días.") 
     break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":

     alerta = ("tiene 30 días.");
      break;

     default:
     alerta = ("tiene 31 días." )


}
alert(alerta)
	
}//FIN DE LA FUNCIÓN