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
  //Agregamos una propuedad que se agregara con property Binding
  deshabilitar = false;
  mensaje = '';
  //Declaramos la variable que se utilizara para la directiva ngIf
  mostrar =false;
  /* Al estar utilizando two-way binding el valor que coloquemos aqui se vera reflejado en la
  plantilla HTML */
  titulo = 'Ingeniero';

  //Agregamos el metodo que sera llamado mediante Event Binding
  agregarPersona(){
    this.mensaje = 'Persona Agregada';
    // let btn = (<HTMLButtonElement>document.getElementById('btnAgregar'));
    // btn.setAttribute('disabled', 'true')
    //Cambiamos el status de la variable mostrar 
    this.mostrar = true;

  }
  
  //EVENT BINDING
  //Modificamos con datos ingresados, esta modificacion se hace de manera indirecta
 /* modificarTitulo(event:Event){
    /*Target hace referencia al elemento que se esta ejecutando en este momento
    pero para poder acceder a esa variable tenemos que hacer un casteo, para esto indicamos que es un
    input de HTML (<HTMLInputElement>) y entonces ya podemos acceder al atributo de value</*
    this.titulo = (<HTMLInputElement>event.target).value; 
    /* Cada que se modifique el valor del elemento HTML input se recibe el valor
    mediante el event y se asigna a la propiedad de titulo /*
  }*/
}