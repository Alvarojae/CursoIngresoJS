function mostrar() {

    dato = document.getElementById("edad").value;
    dato = parseInt(dato);
    if (dato > 18) 
    {
        alert("mayor de edad")
    }
    else {
    if (dato > 12 && dato < 18) 
    {
        alert("adolescente");
    }
    else 
    {
        alert("niño");
    }

    }
}
//FIN DE LA FUNCIÓN