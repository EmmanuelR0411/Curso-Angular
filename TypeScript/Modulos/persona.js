"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
/*
Para poder utilizar eta clase en otro archivo se debe utilizar la palabra reservada export
Y se debe importar en el archivo que se va a utilizar
*/
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Persona;
}());
exports.Persona = Persona;
