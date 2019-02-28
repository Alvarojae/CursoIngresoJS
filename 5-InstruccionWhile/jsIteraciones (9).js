function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;
	// declarar variables
	respuesta='si';
	contador=0;
	numeroMaximo=-9999;
	while(respuesta!='no')
	{
		
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		respuesta=prompt("ingrese no para salir");
	}
	console.log("el maximo es "+numeroMaximo);



}//FIN DE LA FUNCIÓN