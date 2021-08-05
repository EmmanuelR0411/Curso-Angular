/* 
Un decorador es una caracteristica agregada en ecma6, nos permite agregar funcionalidad sin 
modificar la clase a la cual queremos decorar, para utilizarlos se maneja el simbolo de '@'
(El uso de decoradores es frecuente en Angular)
Los decoradores se pueden aplicar a clases, metodos y atributos o propiedades de la clase
 */

//target hace referencia a lo que queremos que se ejecute, en este caso una funcion
function Saludar(target:Function): void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decoradores");
    }
}

/* Mediante el decorador de @Saludar agregamos el metodo saludos a la clase de Hola */
@Saludar
class Hola{
    constructor(){}
}

//Creamos un nuevo objeto de la clase Hola
let hola1 = new Hola();
//Mandamos a llamar el metodo agregado mediante el decorador
hola1.saludos();

/* Si maraca error es poque esto de los decoradores aun es experimental pero si funciona c: */