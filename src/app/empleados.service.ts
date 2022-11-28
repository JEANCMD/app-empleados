import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{


constructor(private servicioVentanaEmergente:ServicioEmpleadosService){



}



    empleados:Empleado[]=[

            new Empleado("Jean", "Caceres","Presidente",7500),
            new Empleado("Ana", "martin","Directora",6500),
            new Empleado("Maria", "Fernandez","Jefa sección",5500),
            new Empleado("Laura", "lópez","Administrativo",4500),
        
        ];

        


        agregarEmpleadoServicio(empleado:Empleado){
        
            this.servicioVentanaEmergente.muestraMensaje("Persona que se va agregar: " + "\n" + empleado.nombre + "\n" + "Salario:" + empleado.salario );



            this.empleados.push(empleado);
        }




}





















