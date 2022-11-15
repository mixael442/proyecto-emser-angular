import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../contenido/interfaces/interfaces';
import { ServicesUsuariosService } from '../../contenido/services/services-usuarios.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  usuarios:Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    phone_number: '',
    email: '',
  }

  usuarioLogin:Usuario= {
    id:0,
    password: '',
    nombre: '',
  }

  auth:Usuario | undefined;
 

  constructor(private router:Router,
              private usuarioService:ServicesUsuariosService) { }

  ngOnInit(): void {

  }

  forgot(){
    this.usuarioService.login1().subscribe((resp: Usuario) => this.auth = resp)
    alert(this.auth!.password)
  }

  login(){

    if(this.usuarioLogin.nombre === 'Juan'){
      this.usuarioService.login2().subscribe(resp => { 
        console.log(resp);
        if(resp.id){
          this.router.navigate(['/home'])
        } 
      })
    } else {

      this.usuarioService.login1().subscribe(resp => { 
        console.log(resp);
        if(resp.id){
          this.router.navigate(['/home'])
        } 
      })

    }

    
    
  }
   
}
