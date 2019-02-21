function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
var alerta;
switch(mesDelAño)
{
    case "Febrero":
     alerta =  ("Este mes no tiene más de 29 días.") 
     break;
    default:
     alerta = ("Este mes tiene 30 o más días");
     break;

}
alert(alerta)
}//FIN DE LA FUNCIÓN