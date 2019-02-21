function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var alerta;
switch(mesDelAño)
{
    case "Enero":
     alerta = (" que comiences bien el año!!!. ");
     break;

    case "Marzo":
     alerta = ("a clases!!!.");
     break;

    case "Julio":
     alerta = ("se vienen las vacaciones!!!." );
     break;

    case "Diciembre":
     alerta = ("Felices fiesta!!!.");
     break;
    default:
     alerta = ("no pasa nada papu");
     break;

} 
alert(alerta);
}   
   






//FIN DE LA FUNCIÓN