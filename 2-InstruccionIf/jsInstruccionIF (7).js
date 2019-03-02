function mostrar() {
    //tomo la edad  
    dato = document.getElementById("edad").value;
    dato1 = document.getElementById("estadoCivil").value;
    dato = parseInt(dato);
    if (dato < 18 && dato1!= "Soltero") 
    {
        alert("Es muy pequeño para NO ser soltero.")
    }



}//FIN DE LA FUNCIÓN