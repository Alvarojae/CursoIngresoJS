function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var queresContinuar;
	respuesta='si';
	contador=0;
	positivo=0;
	negativo=1;
	queresContinuar="si";
	while(queresContinuar!="no")
	{
      queresContinuar=prompt("para salir ingrese no")
	}

	 var contadorDeVueltas;
	 contadorDeVueltas=0
 	while(contadorDeVueltas>5)
	{
		contadorDeVueltas++
	}

	var contadorAlumnos;
	var edad
	 contadorAlumno=0
 	while(true)
	{
		edad=promt("ingrese edad")
		edad=parseInt(edad);
		if (edad==66)
		{
			break;
		}
		
		if (edad==100)
		{
			break;
	    }
		
		contadorDeVueltas++
	}
	if(contadorAlumnos==100)
	{
		alert("no encontro ningun alumno de 66 años")
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN