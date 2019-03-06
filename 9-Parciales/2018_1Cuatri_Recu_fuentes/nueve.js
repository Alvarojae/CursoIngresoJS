function mostrar()
{
    var animal; 
    var peso;
    var temperatura;
    var continuar;
    var contadorTemperaturaPar;
    var masPesado;
    var masNombre;
    var masTemperatura;
    var contadoraTemperatura;
    var bandera;
    var pesoTotal;
    var pesoPromedio;
    var pesoMaximo
    var pesoMinimo

    //----------------------
    contadorTemperaturaPar=0
    contadoraTemperatura=0
    bandera=0
    pesoTotal=0
    pesoPromedio=0
    
    
    
    continuar="no"


    while(continuar!="si")
    {
        animal=prompt("ingresar animal")
        peso=prompt("ingresar peso")
        peso=parseInt(peso)

    while(!(peso>0 && peso<1000))
    {
        peso=prompt("por favor ingresar peso")
        peso=parseInt(peso)
    }
        temperatura=prompt("ingresar temperatura entre -30 y 30 ")
        temperatura=parseInt(temperatura)
    
    while(!(temperatura>=-30 && temperatura<=30))
    {
        temperatura=prompt("por favor ingresar temperatura")
        temperatura=parseInt(temperatura)
    }
    
    if(temperatura%2==0)
    {
        contadorTemperaturaPar++
    }

    if(peso>masPesado || bandera==0)
    {
        masPesado=peso
        masNombre=animal
        masTemperatura=temperatura
    }

    if(temperatura<0)
    {

        contadoraTemperatura++
    }

    if(peso>0)
    {
        pesoTotal=peso+pesoTotal
    }

    if((temperatura<0 && peso>pesoMaximo) || bandera==0)
    {
        pesoMaximo=peso
    }
    if((temperatura<0 && peso<pesoMinimo) || bandera==0)
    {
        pesoMinimo=peso
    }
    
    
    
    bandera++
    continuar=prompt("si desea deternese poner si")
    }

    pesoPromedio=pesoTotal/bandera
    console.log("temperatura pares: " + contadorTemperaturaPar)
    console.log("nombre y temperatura del animal mas pesado " + masNombre + " " + masTemperatura  )
    console.log("cantidad de animales que viven bajo cero " + contadoraTemperatura)
    console.log("promedio de todos los pesos " + pesoPromedio)
    console.log("peso mayor en ambiente bajo cero es " + pesoMaximo)
    console.log("peso menor en ambiente bajo cero es " + pesoMinimo)
    
}
