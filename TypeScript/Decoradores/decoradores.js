"use strict";
/*
Un decorador es una caracteristica agregada en ecma6, nos permite agregar funcionalidad sin
modificar la clase a la cual queremos decorar, para utilizarlos se maneja el simbolo de '@'
(El uso de decoradores es frecuente en Angular)
Los decoradores se pueden aplicar a clases, metodos y atributos o propiedades de la clase
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//target hace referencia a lo que queremos que se ejecute, en este caso una funcion
function Saludar(target) {
    target.prototype.saludos = function () {
        console.log("Hola desde decoradores");
    };
}
/* Mediante el decorador de @Saludar agregamos el metodo saludos a la clase de Hola */
let Hola = class Hola {
    constructor() { }
};
Hola = __decorate([
    Saludar
], Hola);
//Creamos un nuevo objeto de la clase Hola
let hola1 = new Hola();
//Mandamos a llamar el metodo agregado mediante el decorador
hola1.saludos();
/* Si maraca error es poque esto de los decoradores aun es experimental pero si funciona c: */ 
