/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

}
function Circulo () 
{
	
}
function Materiales () 
{
	largo = document.getElementById("Largo").value ;
    ancho = document.getElementById("Ancho").value ;
    largo = parseInt (largo);
    ancho = parseInt (ancho);
    cemento = (largo * ancho)*2;
    cal = ((cemento * 3)/2)
    alert ("necesitas " + cemento + " bolsas de cemento " + " y " + cal + " bolsas de cal")
}