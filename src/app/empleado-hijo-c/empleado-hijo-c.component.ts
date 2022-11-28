import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;


  constructor() { }

  ngOnInit(): void {
  }

  
empleados:Empleado[]=[

  new Empleado("Jean", "Caceres","Presidente",7500),
  new Empleado("Ana", "martin","Directora",6500),
  new Empleado("Maria", "Fernandez","Jefa sección",5500),
  new Empleado("Laura", "lópez","Administrativo",4500),


];

arrayCaracteristicas = [''];

agregarCaracteristica(nuevaCaracteristica: string) {
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}




}
