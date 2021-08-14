import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora Modularizada';
  resultadoPadre!: number;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }
}
