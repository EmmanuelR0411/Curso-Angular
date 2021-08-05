/*
Para poder utilizar eta clase en otro archivo se debe utilizar la palabra reservada export
Y se debe importar en el archivo que se va a utilizar
*/
export class Persona {
    nombre:string;
    apellido:string;

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}