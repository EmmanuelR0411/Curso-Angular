/* Este componente se creo de manera automatica mediante el cli */
import { Component, OnInit } from '@angular/core';

//Se crea todo lo del componente de manera automatica
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
/* Se exporta la clase para que se pueda utilizar desde otras partes de la aplicacion
De forma autoatica implementa en la clase la interface OnInit
*/
export class PersonaComponent /*implements OnInit*/ {

  constructor() { }

/*Debido a la implementacion de la interface debemos de utilizar este metodo, esto tiene que ver con
el ciclo de vida de los coponentes, ngOnInit sirve para inicializar el componente
*/
  /*ngOnInit(): void {
  }*/

}
