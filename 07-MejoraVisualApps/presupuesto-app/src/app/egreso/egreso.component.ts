import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos: Egreso[]=[];
  /* Este es un valor que se recibe del padre (por eso el decorador) y servira pra calcular
  el porcentaje que aparece a un lado del valor del egreso */
  @Input() ingresoTotal:number;
  
  /* Inyectamos el servicio en nuestra clase */
  constructor(private egresoService: EgresoServicio) { }

  ngOnInit(): void {
    /* Inicializamos el arreglo de egresos */
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso){
    this.egresoService.eliminarEgreso(egreso);
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal;
  }

}
