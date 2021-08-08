import { Component } from "@angular/core";

@Component({
    //Indicamos el nombre del componente que se utilizara en las paginas HTML
    selector: 'app-personas',
    //Indicamos la ruta relativa del archivo html de nuestro componente
    templateUrl: './personas.component.html',

    /* Si el archivo que se debe agregar son pocas lineas de codigo se puede replazar el 
    templateUrl por el template, este sirve para agregar el codigo directamente en una sola linea
    a esto se le conoce como in line
    **para poder dar saltos de linea se debe de utilizar el caracter de ` */
   /* template: `<h1>Listado de Personas</h1>
              <app-persona></app-persona>`*/

    //Indicamos el archivo CSS a utilizar, si se quieren utilizar mas archivos se separan con una coma
    styleUrls: ['./personas.component.css'],
    //De igual forma podemos agregar stylos css inline
    /* styles: [`
      h1{
        color: blue;
      }
    `] */
  })
//Definimos la clase que se va a utilizar, utilizamos export porque la clase debe ser exportada
export class PersonasComponent{

}