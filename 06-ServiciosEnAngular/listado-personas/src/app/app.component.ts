import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './peronas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* Implementamos OnInit para poder darle un valor inicial al arreglo de personas
El valor inicial que tendra es el que se enciuentra en personas.service.ts */
export class AppComponent implements OnInit {

  title = 'Listado de Personas';
  personas: Persona[] = [];
  errorAgregar= '';
  
  /* Inyectando los servicios por medio de DI(DEPENDENCY INJECTION) */
  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){}
            
  /* ngOnInit es parte de la implementacion de OnInit, aqui es en donde inicializamos los valores
  en este caso el arreglo de personas, se puede inicializar su valor en otro lado pero se recoienda
  que se haga aquí ya que este metodo se ejecuta depues del contructor de la clase */
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }


  /* Metodo para agregar persona */
  // personaAgregada(persona: Persona){
    
    // this.personasService.agregarPersona(persona);
    /* Aqui inicializamos el valor de errorAgregado y no en el metodo ngOnInit porque 
    ese metodo se ejecuta al comienzo entonces le daria el valor de vacio('') al atributo
    y como ese valor cambia dependiendo de si se agrega la persona o no le asignamos el valor
    fuera de ese metodo */
  //   this.errorAgregar = this.personasService.errorAgregar;
  // }
}
