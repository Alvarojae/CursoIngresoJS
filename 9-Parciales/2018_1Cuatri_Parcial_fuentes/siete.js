function mostrar()
{
var notas;
var sexo;
var promedioNotas;
var notabaja;
var sexomenor;
var contadorvarones;
var sumaNotas;
//variables
notas=0;
alumnos=0;
promedioNotas=0;
notabaja=11;
contadorvarones=0;
sumaNotas=0;


//definir variables



while(alumnos<2)
{

    notas=prompt("ingrese nota")
    notas=parseInt(notas) 
    

while(!(notas>=0 && notas<=10))//(notas<0 || notas>10) && notas!="")
{
    notas=prompt("ingrese nota correcta(entre 0 y 10)")
    notas=parseInt(notas) 
}
sexo=prompt("Sexo f o m?")

while(sexo!="f" && sexo!="m")
{
    sexo=prompt("ingrese el sexo correctamente(f o m)")
    
}

if(notas>0)
{
    sumaNotas=notas+sumaNotas
}

if(notas<notabaja)
{
    notabaja=notas
    sexomenor=sexo
}

if(notas>5 && sexo=="m")
{
    contadorvarones++
}

alumnos++
}
promedioNotas=sumaNotas/alumnos
alert("el promedio de notas totales es : " + promedioNotas)
alert("la nota mas baja es : " + notabaja + " y el sexo de la nota es: " + sexomenor)
alert("la cantidad de varones que su nota fue mayor o igual a 6 fue: " + contadorvarones)

}
