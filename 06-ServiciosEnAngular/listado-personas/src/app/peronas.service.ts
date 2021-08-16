import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";


/* Para poder inj¿yectar un servicio dentro de otro servicio debemos utilizar el decorador
@Injectable */
@Injectable()
/* Creamos un servicio quien sera el encargado de agregar a las lpersonas a la lista */
export class PersonasService{
  errorAgregar= '';

  /* Dentro de este serviio vamos a inyectar el servicio de loggingService para que todo
  se maneje de manera centralizada en el metodo agregar persona 
  Para esto definimos un constructor*/
  constructor(private logingService: LoggingService){}

    //Trabajamos con los objetos de tipo persona
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez'), new Persona('Reggy','Mi amor')] 
  //Creamos un arreglo de tipo Persona y asignamos valores que son dos objetos de tipo persona
  

  /* Creamos el metodo para agregar personas */
  agregarPersona(persona: Persona){
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
      /* Aqui mandamos a llamar el metodo del servicio que se declaro arriba   */
      this.logingService.enviaMensajeConsola(`Agregamos persona: ${persona.nombre} ${persona.apellido}`)
    }
    else {
      this.errorAgregar = 'Esta persona ya esta en la lista';
    }
      
  }

  /* Creamos un atributo que nos ayudara a propagar la informacion de un servicio a otro*/
  saludar = new EventEmitter<number>();
}