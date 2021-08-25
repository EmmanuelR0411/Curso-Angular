import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* Creamos una variable para manejar el tipo de operacion y le damos un valor
  inicial ya que por default toma el +(por el select de la plantilla) */
  tipo:string = "ingresoOperacion"

  descripcionInput: string;
  valorInput: number;


  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    /* Para acceder al valor del select lo hacemos mediante el target y posteriormente al valor de 
    este */
    this.tipo = evento.target.value;
  }


  agregarValor(){
    if(this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
    }
    else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput))
    }
  }
}
