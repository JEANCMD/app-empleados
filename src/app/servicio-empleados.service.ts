import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {
  [x: string]: any;

  constructor() { }



muestraMensaje(mensaje:string){

  alert(mensaje);

}



}
  