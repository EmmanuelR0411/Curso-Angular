import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  Ingresos: Ingreso[] = [];
  constructor(private ingresosServicio: IngresoServicio) { }

  ngOnInit(): void {
    this.Ingresos = this.ingresosServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    /* Mediante el servicio que definimos en el contructor mandamos a llamar el metodo de eleminar
    que esta declarado en el mismo servicio que aqui fue inyectado */
    this.ingresosServicio.eliminar(ingreso);
  }

}
