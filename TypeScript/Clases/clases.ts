//Para crear una clase se utiliza la palabra reservada class
class Persona {
    //Creacion de atributos
    private nombre: string;

    //Constructor de la clase
    constructor (nombre:string){
        this.nombre = nombre;
    }

    //Generamos el geter para recuperar el nombre(se indica que va a regresar, en este caso un string)
    public getNombre():string{
        return this.nombre;
    }
    //GEneramos el set para poder cambiar el nombre
    setNombre(nombre:string){
        this.nombre = nombre;
    }

    //Creamos un metodo estatico
    static metodoEstatico():number {
        return 10;
    }
}

let persona1 = new Persona("Juan");
console.log(persona1.getNombre());
persona1.setNombre("Pedro");
console.log(persona1.getNombre()); 

console.log(Persona.metodoEstatico());