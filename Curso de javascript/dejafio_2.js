/*

let nuevo_numero,nuevo_numero1; //declaracion de variables
const tope=1000; //declaracion de constantate

alert("ingresar un numero mayor a 1000");
nuevo_numero=prompt("introduzca el 1er numero");
nuevo_numero1=prompt("introduzca el 2do numero");

if(nuevo_numero>tope || nuevo_numero1>tope)
{
    alert("el numero es mayor a 1000");
}
else{
 
    alert("el numero es menor a 1000");

}

*/

/*
const nombre1="ISA"; //declaracion de constante 
const apellido="LESCANO";

let nuevo_nombre,nuevo_nombre1; //declaracion de variables


alert("ingrese nombre");
nuevo_nombre=prompt("introduzca nombre").toUpperCase();
alert("ingrese apellido");
nuevo_nombre1=prompt("introduzca apellido").toUpperCase();

if(nuevo_nombre==nombre1 && nuevo_nombre1==apellido) //declaro la condicion
{
    console.log("el nombre y apellido es correcto");

}

else{
    console.log("el nombre es incorrecto");
}
*/


let numero_x; //declaracion de variable

alert("ingrese un numero entre 10 y 50");
numero_x=prompt("ingrese numero");

if(numero_x>10 && numero_x<50){

    alert("el numero es correcto");

}
else if(typeof(numero_x) =="string") {
    alert("lo que ingreso no es un numero");

}

else{
    alert("el numero es incorrecto");
}
