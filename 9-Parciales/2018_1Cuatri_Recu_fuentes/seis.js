function mostrar()
{
    var nota;
    var alerta;

    nota=prompt("ingresar nota")
    nota=parseInt(nota)

switch (nota) 
{
    case 0:
    case 1:
    case 2:
    case 3:
        alerta=("la proxima se puede")
        break;
    case 4:
    case 5:
    case 6:
        alerta=("raspando")
        if(nota<5)
        {
            alert("debes preocuparte mas")
        }
        break;
    case 8:
    case 9:
    case 10:
        alerta=("muy bien")
        break

    default:
    alerta=("aprobaste")

    if(nota<0 || nota>10)
    {
        alerta=("la nota no es valida")
    }
        break;
}

alert(alerta)
}




