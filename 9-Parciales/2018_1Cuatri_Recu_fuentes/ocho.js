function mostrar()
{




while(continuar!=no)
{
var pais;
var superficie
var contadorImpar

//-----------------------------
contadorImpar=0



pais=prompt("ingrese un pais")
superficie=prompt("ingrese superficie del pais")
superficie=parseInt(superficie)

  while(superficie<0)
  {
      superficie=prompt("ingrese superficie valida")
      superficie=parseInt(superficie)
  }

  if(superficie%2==1)
  {
      contadorImpar++
  }



}
 console.log("la cantidad de paises impares son" + contadorImpar)





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
