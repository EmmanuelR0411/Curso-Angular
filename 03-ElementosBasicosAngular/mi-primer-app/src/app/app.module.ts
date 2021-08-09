import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importacion de los componentes
//Ruta del AppComponent
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

/* Aqui se agrega un decorador para agregar caracteristicas extra a la clase AppModule */
@NgModule({
  //Aqui se agregan todos los nuevos componentes
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  /* Aqui bootstrap indica como se esta levantando nuestra aplicacion, en este caso con AppComponent */
  bootstrap: [AppComponent]
})
//Este es exactamente el nombre que se utiliza en el archivo main.ts
export class AppModule { }
