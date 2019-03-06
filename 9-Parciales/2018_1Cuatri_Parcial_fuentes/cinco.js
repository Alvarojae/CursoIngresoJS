function mostrar()
{
var planeta;
var alerta;
//------------
planeta = prompt("ingresar un planeta del sistema solar ")

switch(planeta)
{
    case "tierra":
        alerta=( "acá vivimos.")
        break;
    case "mercurio":
    case "venus":
        alerta=("acá hace más calor.")
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alerta=("acá hace más frio.")
        break;
    default:
        alerta=("no es un planeta valido")
        break;
}
alert(alerta)
}


