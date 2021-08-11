import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  //Trabajamos con los objetos de tipo persona
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez'), new Persona('Reggy','Mi amor')] 
  //Creamos un arreglo de tipo Persona y asignamos valores que son dos objetos de tipo persona
  nombreInput: string = '';
  apellidoInput: string = '';
  error = '';

  /* Metodo para agregar persona */
  agregarPersona(){
    if(this.nombreInput != '' && this.apellidoInput != ''){
      this.error = '';

      let bandera: boolean = false;
      
      for(let persona of this.personas){
        if(persona.nombre == this.nombreInput && persona.apellido == this.apellidoInput) {
            this.error = 'Esa persona ya esta en la lista';
            bandera = false;
            break;
        } else {
          this.error='';
          bandera = true;
        }
      }
      console.log(bandera);
      if(bandera){
        let persona1 = new Persona(this.nombreInput, this.apellidoInput);
        this.personas.push(persona1);
      }
    } else {
      this.error = 'Por favor rellene ambos campos';
    }
  }
}
