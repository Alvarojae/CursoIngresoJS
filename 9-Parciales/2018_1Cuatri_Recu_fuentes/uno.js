
function mostrar()
{
    var base
    var altura
    //------------
    base=prompt("ingresar base del rectangulo")
    altura=prompt("ingresar altura del rectangulo")
    base=parseInt(base)
    altura=parseInt(altura)

    alert("perimetro es: " + (base*3) + " y el area es: " + ((base*altura)/2))

}
