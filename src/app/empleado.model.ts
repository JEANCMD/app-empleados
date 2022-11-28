export class Empleado{



    constructor(nombre:string, apellido:string, cargo:string, salario:number){

//para librar dudam recordar que  lo que esta dentro del constructor = (nombre:string, apellido:string, cargo:string, salario:number) es el parametro 


        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;


    }
//para librar duda recordar que  lo que esta aca abajo es el campo de clase el cual no es lo mismo q el parametro

    nombre:string="";
    apellido:string="";
    cargo:string="";
    salario:number=0;




}