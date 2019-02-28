function mostrar()
{

	var contador;
	var sumaPositivos;
	var sumaNegativos;
	var numero;
	var respuesta;
	var bandera;
	var contadorPositivo;
	var contadorNegativo;
	var contadorCeros;
	var contadorPares;
	var promedioNegativo;
	var promedioPositivo;
	// declarar variables
	promedioNegativo=0;
	promedioPositivo=0;
	contadorCeros=0;
	contadorPares=0;
	respuesta='si';
	contador=0;
	bandera=0
	sumaPositivos=0;
	sumaNegativos=0;
	contadorPositivo=0;
	contadorNegativo=0;
	while(respuesta!='no')
	{
	
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero<0)
		{
		    sumaNegativos=sumaNegativos+numero
            contadorNegativo++
		}
		if(numero>0)
		{
		    sumaPositivos=sumaPositivos+numero
            contadorPositivo++
		}
		if(numero==0)
		{
            contadorCeros++
		}

		if(numero%2==0 && numero!=0)
		{
			contadorPares++
		}
		
		respuesta=prompt("ingrese no para salir");
	}


	promedioNegativo=sumaNegativos/contadorNegativo
	promedioPositivo=sumaPositivos/contadorPositivo
	console.log("la suma de los negativos es: " + sumaNegativos);
	console.log("la suma de los positivos es: " + sumaPositivos);
	console.log("la cantidad de numero positivos es: " + contadorPositivo)
	console.log("la cantidad de numero negativos es: " + contadorNegativo)
	console.log("la cantidad de ceros es: " + contadorCeros)
	console.log("la cantidad de pares es: " + contadorPares)
	console.log("el promedio de numeros negativos: " + promedioNegativo)
	console.log("el promedio de numeros positivos: " + promedioPositivo)




}//FIN DE LA FUNCIÓN