import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos: Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta de coche", 500)

    ];

    eliminar(ingreso: Ingreso){
        /* Declaramos una constante para el indice ya que una vez inicializada ya no se cambiara
        para esto utilizamos el metodo (viene por default) indexof de nuestro arreglo */
        const indice: number = this.ingresos.indexOf(ingreso);

        /* Una vez nos regresa el indice eliminamos el elemnto del arreglo, con el metodo splice
        indicamos el indice que obtuvimos anteriormente y el siguiente valor (1) es para indicarle
        cuantos elementos se quieren remover a partir del indice que se indica, en este caso, con 
        el 1 le indicamos que solamente borre un elemento, en este caso el elemento que tiene el 
        indice que se le indica */
        this.ingresos.splice(indice,1);
    }
}