function mostrar()
{


var pais;
var superficie;
var contadorImpar;
var paisMenor;
var paisIgual100;
var sumaKilometros;
var promedioKilometros;
var primerPais;
var contadorPaises;
var territorioMenor;
var continuar;
var territorioMenorNombre;

//-----------------------------
contadorImpar=0;
paisMenor=0;
paisIgual100=0;
promedioKilometros=0;
primerPais= "";
contadorPaises=0;
continuar="si";
sumaKilometros=0;


while(continuar!="no")
{

pais=prompt("ingrese un pais")
superficie=prompt("ingrese superficie del pais")
superficie=parseInt(superficie)

  while(superficie<0)
  {
      superficie=prompt("ingrese superficie valida")
      superficie=parseInt(superficie)
  }

 
    if(superficie<100)
    {
        
        paisMenor++
    } else {

    if(superficie==100)
    {
        paisIgual100++
    } 
        
    }
    if(superficie%2==1)
    {
    
        contadorImpar++
    }   
    
    if(superficie>100 && primerPais=="")
    {
        primerPais=pais
    }
    if(superficie<territorioMenor || contadorPaises==0)
    {
    
        territorioMenor=superficie
        territorioMenorNombre=pais
    }
  
   contadorPaises++
   sumaKilometros= sumaKilometros + superficie

 continuar=prompt("para salir escriba no")
}
promedioKilometros=sumaKilometros/contadorPaises

 console.log("la cantidad de paises impares son: " + contadorImpar)
 console.log("la cantidad de paises con menos de 100km de superficie son: " + paisMenor)
 console.log("la cantidad de paises iguales a 100km son: " + paisIgual100)
 console.log("el primer pais que supero los 100kms es:" + primerPais)
 console.log("el promedio de kilometros es :" + promedioKilometros)
 console.log("el pais con menos superficie es:" + territorioMenorNombre)





}
/*
2-en ocho.js, .
Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.
*/
