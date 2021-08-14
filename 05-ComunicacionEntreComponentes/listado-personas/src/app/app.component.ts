import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  errorAgregar= '';
  //Trabajamos con los objetos de tipo persona
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez'), new Persona('Reggy','Mi amor')] 
  //Creamos un arreglo de tipo Persona y asignamos valores que son dos objetos de tipo persona
  

  /* Metodo para agregar persona */
  personaAgregada(persona: Persona){
    let bandera: boolean = false;

    for (let i of this.personas){
      if(persona.nombre == i.nombre && persona.apellido == i.apellido){

        this.errorAgregar = 'Esa persona ya esta en la lista';
        bandera = false;
        break;
      }
      else {
        this.errorAgregar='';
        bandera = true;
      }
    }
    
    if(bandera){
      this.personas.push(persona);
    }
    else {
      this.errorAgregar = 'Esta persona ya esta en la lista';
    }
      
  }
}
