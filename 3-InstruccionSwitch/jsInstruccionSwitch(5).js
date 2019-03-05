function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var alerta;
//alert (laHora);
laHora = parseInt (laHora)
switch(laHora)
{

    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
     alerta = ( "Es de mañana.");
      break;

     default:
      alerta = ("No es de mañana" )
      break;


}
alert(alerta)
	
}//FIN DE LA FUNCIÓN