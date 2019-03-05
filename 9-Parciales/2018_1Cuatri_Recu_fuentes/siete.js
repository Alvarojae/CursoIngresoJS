function mostrar()
{
    var velocidad;
    var vehiculos;
    var contador;
    var sumaPromedio;
    var velocidadPromedio;
    var velocidadBaja
    var combustibleBaja
    var combustibleLiquidoSuma
    var velocidadAlta
    
    //----------------
    velovidad=0
    vehiculos=0
    contador=0
    sumaPromedio=0
    velocidadPromedio=0
    velocidadBaja=250
    combustibleBaja
    combustibleLiquidoSuma=0
    velocidadAlta=0
    
     
     while(contador<5)
     {
         velocidad=prompt("velocidad en kilometros, (entre 0 y 250)")
         velocidad=parseInt(velocidad)
         
         while(velocidad<0 || velocidad>250)
         {
             velocidad=prompt("velocidad de entre 0 y 250")
             velocidad=parseInt(velocidad)
   
         }

         combustible=prompt("combustible, S o L (solido o liquido)")
         
         while(combustible!="S" && combustible!="L" )
         {
            combustible=prompt("S o L(solido o liquido)")
         }

         if(contador==0 || velocidad<velocidadBaja)
         {
             velocidadBaja=velocidad
             combustibleBaja=combustible
         }

        if(combustible=="L" && velocidad>100)
        {
            combustibleLiquidoSuma++
        }

        if(combustible=="S" && velocidad>velocidadAlta)
         {
             velocidadAlta=velocidad
        
         }
        
        contador++
        sumaPromedio=velocidad + sumaPromedio
     }
     velocidadPromedio=sumaPromedio/contador
     //alert(combustible + velocidad)

      alert("la suma de las velocidades es:" + sumaPromedio)
      alert("la velocidad mas baja es: " + velocidadBaja + " y el combustible usado es; " + combustibleBaja)
      alert("la velocidad promedio es " + velocidadPromedio)
      alert("la cantidad de combustibles liquidos que superan los 100kmh es:" + combustibleLiquidoSuma)
      alert("la velocidad mas alta de los combustible solidos es " + velocidadAlta)

}


/*
1-en siete.js,
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido
*/