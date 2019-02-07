/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    dato = document.getElementById("elNombre").value ;
    dato1 = document.getElementById("laEdad").value ;
    alert("usted se llama " + dato + " y tiene " + dato1 + " años");

}

