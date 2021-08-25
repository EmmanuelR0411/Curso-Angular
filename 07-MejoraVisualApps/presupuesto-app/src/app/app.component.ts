import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  /* Inyectamos una dependencia de nuestros dos servicios (ingreso y egreso) */
  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio){
    /* INICIALIZAMOS LOS ATRIBUTOS DE LA CLASE */
    this.ingresos = ingresoServicio.ingresos
    this.egresos = egresoServicio.egresos;

  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;

    /* Recorremos el arreglo declarado en esta clase mediante un forEach, cuando se recorre, en cada
    iteracion se guardan sus valores en la variable que se declara adentro "ingreso" y al ser este
    un objeto de una clase accedemos a su atributo de valor */
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    });
  
    /* Retornamos la variable que nos devuelve la suma de todos los ingresos */
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }

  getProcentajeTotal(){
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
