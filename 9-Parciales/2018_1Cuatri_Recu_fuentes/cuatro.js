function mostrar()
{
    var numero;
    var numero1;
    numero=prompt("ingrese primer numero");
    numero1=prompt("ingrese segundo numero");
    numero=parseInt(numero);
    numero1=parseInt(numero1);

    if(numero==numero1)
    {
        alert(numero + "" + numero1);
    }else
    {
        if(numero>numero1)
        {
            alert(numero/numero1);
        }else
        {
            alert(numero+numero1);
                
            if((numero+numero1)<50)
            {
                alert("la suma es "+ (numero+numero1) + " y es menor a 50");
            }
    
        }
        
    }

}





