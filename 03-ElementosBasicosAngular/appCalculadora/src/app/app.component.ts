import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Aplicación Calculadora';
  resultado!: number;
  operandoA!: number;
  operandoB!: number;

  metodoSumar(){
    this.resultado = this.operandoA + this.operandoB;
    if(isNaN(this.resultado)){
      this.resultado = 0;
    }
  }

  metodoRestar(){
    this.resultado = this.operandoA - this.operandoB;
    if(isNaN(this.resultado)){
      this.resultado = 0;
    }
  }

  metodoMultiplicar(){
    this.resultado = this.operandoA * this.operandoB;
    if(isNaN(this.resultado)){
      this.resultado = 0;
    }
  }
}
