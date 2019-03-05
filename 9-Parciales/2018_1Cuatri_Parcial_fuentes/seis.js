function mostrar()
{
    var hora
    var alerta    
    hora=document.getElementById("laHora").value
    hora=parseInt(hora)



    switch (hora) 
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        alerta=("es de mañana")
        
        break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        alerta=("es de tarde")
            break;
        default:
        alerta=("es de noche")
        
        if(hora<24 && hora>19)
        {
            alert("es de noche")
            alerta=("a dormir")

        }else
        {
            if(hora<1 || hora>24)
            {
                alerta=("hora equivocada")
            }
                break;
        }

    }
    alert(alerta)
}

    
