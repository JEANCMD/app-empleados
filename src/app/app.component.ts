import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService:LoginService){

    // this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyALdfemvJ7-xV1xr_0JEeprYrW6EeqdiTQ",
      authDomain: "mis-clientes-8c1fb.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogeado();
  }
  logout(){
    this.loginService.logout(); 
  }
  


}
