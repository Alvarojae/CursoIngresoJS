function mostrar()
{

	var contador;
	var numeroPositivos;
	var numeroNegativos;
	var numeroIngresado;
	var respuesta;
	var bandera;
	// declarar variables
	respuesta='si';
	contador=0;
	bandera=0
	while(respuesta!='no')
	{
	
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(bandera==0)
		{
		 numeroPositivos=numeroIngresado
			numeroNegativos=numeroIngresado
			bandera=1
		
		}else
		{
			if(numeroIngresado numeroPositivos)
			{
			 numeroPositivos=numeroIngresado;
			}
			if(numeroIngresado<numeroNegativos)
			{
				numeroNegativos=numeroIngresado;
			}

		}
		
		respuesta=prompt("ingrese no para salir");
	}
	console.log("el maximo es " numeroPositivos);
	console.log("el minimo es "+numeroNegativos);




}//FIN DE LA FUNCIÓN