function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

var alerta;
switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
     alerta = (" Abrigate que hace frio ");
     break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "diciembre":
     alerta = ("Ya pasamos el frio, ahora calor!!!.");
     break;
    default:
     alerta = ("Falta para el invierno." );
     break;
    
} 
alert(alerta);
}   



//FIN DE LA FUNCIÓN