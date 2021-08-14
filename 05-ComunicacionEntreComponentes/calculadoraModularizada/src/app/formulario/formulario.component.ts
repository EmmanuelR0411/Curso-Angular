import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  operandoA!: number;
  operandoB!: number;

  
  @Output() operandoAB = new EventEmitter<number>();

  metodoSumar(){
    
    let resultado: number = this.operandoA + this.operandoB;
    this.operandoAB.emit(resultado);
  }
  metodoRestar(){
    let resultado: number = this.operandoA - this.operandoB;
    this.operandoAB.emit(resultado);
  }
  metodoMultiplicar(){
    let resultado: number = this.operandoA * this.operandoB;
    this.operandoAB.emit(resultado);
  }


}
