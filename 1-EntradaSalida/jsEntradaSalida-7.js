/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
    
    /*dato = document.getElementById("numeroUno").value ;
    dato1 = document.getElementById("numeroDos").value ;
    dato = parseInt (dato);
    dato1 = parseInt (dato1); */
    

function sumar()
{	

	dato = document.getElementById("numeroUno").value ;
    dato1 = document.getElementById("numeroDos").value ;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    suma = (dato + dato1);
    alert (suma);
	
}


function restar()
{
	dato = document.getElementById("numeroUno").value ;
    dato1 = document.getElementById("numeroDos").value ;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    resta = (dato - dato1);
    alert (resta);
	
}

function multiplicar()
{ 
	dato = document.getElementById("numeroUno").value ;
    dato1 = document.getElementById("numeroDos").value ;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    multiplo = (dato * dato1);
    alert (multiplo);
	
}

function dividir()
{
	dato = document.getElementById("numeroUno").value ;
    dato1 = document.getElementById("numeroDos").value ;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    divi = (dato / dato1);
    alert (divi);
	
}

