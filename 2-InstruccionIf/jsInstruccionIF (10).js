function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var dato
	dato = Math.floor(Math.random() * 10 + 1);
	alert(dato)
	if (dato == 9 || dato == 10) {
		alert("EXCELENTE")
	}
	else {
		if (dato >= 4) {
			alert("APROBÓ")
		}
		else {
			alert ("Vamos, la proxima se puede")
		}
	}


}//FIN DE LA FUNCIÓN