/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    dato = document.getElementById("importe").value ;
    dato = parseInt (dato);
    dato1 = (dato * 0.75);
	document.getElementById("resultado").value = dato1;
}
