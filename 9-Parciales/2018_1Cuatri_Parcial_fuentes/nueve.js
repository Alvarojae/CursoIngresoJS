function mostrar()
{
var marca;
var peso;
var temperatura;
var continuar;
var temperaturaPar;
var productoPesado;
var mayorPeso;
var congelado;
var pesoTotal;
var bandera;
var menorPeso;

//-----------------------------------
marca
peso=0
temperatura=0
continuar="no"
temperaturaPar=0
mayorPeso=0
congelado=0
pesoTotal=0
bandera=0
menorPeso=101

//--------------------------------------


    while (continuar!="si")
    {
      
        marca=prompt("ingresar marca del producto")
        peso=prompt("ingresar el peso del producto(entre 1 y 100)")
        peso=parseInt(peso)
        
        while(peso<1 || peso>100)
        {
            peso=prompt("Por favor ingresar entre 1 y 100 ")
            peso=parseInt(peso)
        }
        
        temperatura=prompt("Ingresar la temperatura de almacenamiento (entre -30 y 30)")
        temperatura=parseInt(temperatura)
       
        while(temperatura<-30 || temperatura>30)
        {
            temperatura=prompt("Por favor ingresar temperatura entre -30 y 30")
            temperatura=parseInt(temperatura)
        }


        if(temperatura%2==0 && temperatura!=0)
        {
            temperaturaPar++
        }

        if(peso>mayorPeso)
        {
            mayorPeso=peso
            productoPesado=marca
        }else
        {
            if(peso<menorPeso)
            {
                menorPeso=peso
            }
        }
        if(temperatura<0)
        {
            congelado++
        }
        if(peso>0)
        {
            pesoTotal=peso+pesoTotal
            bandera++
        }

        continuar=prompt("Para deternese ponga: si")

    }

    promedioPeso=pesoTotal/bandera
    
    
    console.log("La cantidad de temperaturas pares es: " + temperaturaPar )
    console.log("La marca del producto más pesado es: " + productoPesado )
    console.log("La cantidad de productos que se conservan a menos de 0 grados es: " + congelado)
    console.log("El promedio del peso de todos los productos es: " + promedioPeso)
    console.log(" El peso máximo: "+ mayorPeso)
    console.log(" El peso mínimo: "+ menorPeso)

}

