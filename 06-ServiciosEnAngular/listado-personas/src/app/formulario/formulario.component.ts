import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../peronas.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']   
})
export class FormularioComponent {
  /* Agregamos el decorador de output porque de aqui enviaremos informacion al componente padre
  Para esto definimos un atributo que es quien se encarga de propagar la informacion
  EventEmitter es quien se encarga de poder comunicar la informacio del componente hijo al padre
  (Persona->Es debido a que vamos a enviar informacion de tipo persona ) */
  //@Output() personaCreada = new EventEmitter<Persona>();

  // nombreInput: string = '';
  // apellidoInput: string = '';
  error = '';

  /* Usamos viewChild para recuperar las referencias locales */
  @ViewChild('nombreInput') nombreInput!: ElementRef;
  @ViewChild('apellidoInput') apellidoInput!: ElementRef;

  /* Aqui utilizamos dependency injection
  para esto a nuestro contructor le pasamos una instancia del servicio que establecimos */
  constructor(private loggingService: LoggingService, 
              private personasService: PersonasService){
                
                this.personasService.saludar.subscribe(
                  (indice:number) => alert(`El indice es: ${indice}`)
                );
                /* Aqui nos suscribimos al evento que se realiza en personas.service.ts
                y mediante una funcion de tipo flecha recibimos en este caso una variable 
                de tipo number y mandamos un alert con la variable que se recibio*/
              }


  /* Metodo para agregar persona 
  Al pasarle los parametros de forma local tenemos que indicar de uqe tipo es 
  agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement)
  Si usamos viewChild ya no es necesario pasar esos parametros*/
  agregarPersona(){
    if(this.nombreInput.nativeElement.value != '' && this.apellidoInput.nativeElement.value != ''){
      let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
      this.personasService.agregarPersona(persona1);
      this.error = this.personasService.errorAgregar;
      /* Aqui mandamos a llamar el metodo emit quien sera que propague la informacion, en este caso
      el objeto creado de persona (persona1), en resumen se envia la informacion al padre
      y ahi se agrega al arredlo de personas ya que aqui no tenemos acceso a ese arreglo
      Como paso final en el componente padre debemos utilizar event binding*/
      
      //this.loggingService.enviaMensajeConsola(`Enviamos persona: ${persona1.nombre} ${persona1.apellido}`);
      //this.personaCreada.emit(persona1);
        } else {
          this.error='Llene los campos';
        }
      }
}
