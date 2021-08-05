"use strict";
//DEFINIMOS UNA FUNCION NORMAL
var sumar = function (a, b) {
    return a + b;
};
//DEFINIMOS UNA FUNCION FLECHA
var sumarFlecha = function (a, b) {
    return a + b;
};
console.log(sumar(5, 3));
console.log("Suma con funcion flecha: " + sumarFlecha(3, 2));

let obtenerNombre = function(){
    return "Juan Perez";
}

let obtenerNombreFlecha = () =>{
    return "Juan Perez Flecha";
}