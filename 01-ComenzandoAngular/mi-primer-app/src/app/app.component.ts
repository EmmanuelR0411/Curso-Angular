import { Component } from '@angular/core';

/* Aqui se define un componente de angular */
@Component({
  /* El selector es igual al tag que se utilizara para que sea llamado en el HTML */
  selector: 'app-root',
  /* Mediante templateUrl hacemos referencia a la "plantilla" que se va a utilizar, es decir
  hace referencia a la ruta en donde se encuentra el archivo html que se va a utilizar*/
  templateUrl: './app.component.html',
  //Aqui relacionamos los estilos que se aplicaran a ese componente
  styleUrls: ['./app.component.css']
})

/* Aqui se define una clase de typeScript */
export class AppComponent {
  // Se define un atributo de esta clase, el cual se utiliza dentro de la pagina html
  title = 'Mi Primera App en Angular';
}
