"use strict";
//Para crear una clase se utiliza la palabra reservada class
class Persona {
    //Constructor de la clase
    constructor(nombre) {
        this.nombre = nombre;
    }
    //Generamos el geter para recuperar el nombre(se indica que va a regresar, en este caso un string)
    getNombre() {
        return this.nombre;
    }
    //GEneramos el set para poder cambiar el nombre
    setNombre(nombre) {
        this.nombre = nombre;
    }
    //Creamos un metodo estatico
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
persona1.setNombre("Pedro");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
