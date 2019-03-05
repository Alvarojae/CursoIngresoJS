function mostrar()
{
    var letra;
    var numero;
    var continuar
    var contadoraCero
    var contadorPar
    var contadorImpar
    var sumaNumeroPositivo
    var sumaNumeroNegativo
    var contador
    var numeroMinimo
    var numeroMaximo
    var letraMaxima
    var letraMinima
    var bandera


    //---------------------------
    continuar="no"
    numero=0
    contadoraCero=0
    contadorPar=0
    contadorImpar=0
    sumaNumeroPositivo=0
    sumaNumeroNegativo=0
    contador=0
    bandera=0
    

    while(continuar!="si")
    {
        letra=prompt("ingrese una letra")
        numero=prompt("ingrese un numero entre (-100,100)")
        numero=parseInt(numero)


        while(numero<-100 || numero>100 )
        {
            numero=prompt("por favor ingrese un numero entre -100 y 100")
            numero=parseInt(numero)
     
        }


        if(numero==0)
        {
            contadoraCero++
        }else
        {
            if(numero>0)
            {
                sumaNumeroPositivo=numero+sumaNumeroPositivo
                contador++
            }else
            {
                sumaNumeroNegativo=numero+sumaNumeroNegativo
            }

        }
        
        if(numero%2==0 && numero!=0)
        {
            contadorPar++
        }else
        {
            if((numero%2==1 || numero%2==-1) && numero!=0)
            {
                contadorImpar++
            }
        }

        if(numero<numeroMinimo || bandera==0)
        {
            numeroMinimo=numero
            letraMinima=letra
        }
        
        if(numero>numeroMaximo || bandera==0)
        {
            numeroMaximo=numero
            letraMaxima=letra
        }
        


        bandera++
        continuar=prompt("si desea salir poner si ")
    }
        promedioNumero=sumaNumeroPositivo/contador
        console.log("la cantidad de numero pares es : " + contadorPar)
        console.log("la cantidad de numero impares es : " + contadorImpar)
        console.log("la cantidad de ceros es: "+contadoraCero)
        console.log("el promedio de numeros positivos es: " + promedioNumero)
        console.log("la suma de los numeros negativos son: " + sumaNumeroNegativo)
        console.log("el numero y la letra del maximo son " + letraMaxima + " " + numeroMaximo)
        console.log("el numero y la letra del minimo son " + letraMinima + " " + numeroMinimo)

            



}




