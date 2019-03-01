/*function mostrar()
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
	numeroMinimo=9999;
	while(respuesta!='no')
	{
		
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		respuesta=prompt("ingrese no para salir");
	}
	console.log("el maximo es "+numeroMaximo);
	console.log("el minimo es "+numeroMinimo);



}//FIN DE LA FUNCIÓN*/

function mostrar()
{

	var contador;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var respuesta;
	var bandera;
	// declarar variables
	respuesta='si';
	contador=0;
	//numeroMaximo=-9999;
	//numeroMinimo=9999;
	bandera=0
	while(respuesta!='no')
	{
	
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(bandera==0)
		{

			numeroMaximo=numeroIngresado
			numeroMinimo=numeroIngresado
			bandera=1
			
		}else{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}

		}
		
		respuesta=prompt("ingrese no para salir");
	}
	console.log("el maximo es "+numeroMaximo);
	console.log("el minimo es "+numeroMinimo);



}//FIN DE LA FUNCIÓN