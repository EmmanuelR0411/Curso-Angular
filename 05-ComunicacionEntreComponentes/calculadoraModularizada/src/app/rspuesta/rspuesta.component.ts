import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rspuesta',
  templateUrl: './rspuesta.component.html',
  styleUrls: ['./rspuesta.component.css']
})
export class RspuestaComponent {

  @Input() resultadoHijo!: number;  

}