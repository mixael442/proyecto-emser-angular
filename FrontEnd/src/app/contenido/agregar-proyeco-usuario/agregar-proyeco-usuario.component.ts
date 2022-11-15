import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoUsuario, Usuario, Proyecto } from '../interfaces/interfaces';
import { ServicesProyectoUsuarioService } from '../services/services-proyecto-usuario.service';
import { ServicesProyectosService } from '../services/services-proyectos.service';
import { ServicesUsuariosService } from '../services/services-usuarios.service';

@Component({
  selector: 'app-agregar-proyeco-usuario',
  templateUrl: './agregar-proyeco-usuario.component.html',
  styleUrls: ['./agregar-proyeco-usuario.component.css']
})
export class AgregarProyecoUsuarioComponent implements OnInit {
  
  constructor(private router:Router,
    private serviceProyectoUsuario:ServicesProyectoUsuarioService,
    private serviceProyectos:ServicesProyectosService,
    private serviceUsuarios:ServicesUsuariosService) { }

  ngOnInit(): void {
    this.serviceProyectos.getProyecto().subscribe(resp=> this.proyectos = resp)
    this.serviceUsuarios.getHeroes().subscribe(resp=> this.usuarios = resp) 
  }

  
  usuarios:Usuario[] = [
    {
      id:0,
      username: '',
      password: '',
      nombre: '',
      apellido: '',
      phone_number: '',
      email: '',
    }
   ];
  proyectos:Proyecto[] = [
    {
      id:0,
      nombre: ''
    }
  ]; 

  proyectoUsuario:ProyectoUsuario = {
    usuario_id: {
      id:0,
      nombre: '',
    },
    proyecto: {
      id:0,
      nombre:''
    }
  };

  selectUsuario(event:any){
    console.log(event.target.value) 
    this.proyectoUsuario.usuario_id = event.target.value
  }
  selectProyecto(event:any){
    console.log(event.target.value) 
    this.proyectoUsuario.proyecto = event.target.value
  }

  /*
  
   cambie el ngValue y el valor usuario.id
  
  
    selectUsuario(event:any){
    console.log(event.target.value) 
      this.proyectoUsuario.usuario_id = this.usuarios
      .find(usuario => usuario.id === Number(event.target.value)) as Usuario
  }

  selectProyecto(event:any){
    console.log(event.target.value) 
    this.proyectoUsuario.proyecto = this.proyectos
    .find( proyecto => proyecto.id === Number(event.target.value) ) as Proyecto
}*/

  guardar(){
    this.router.navigate(['/home/proyecto-usuario'])
      console.log( this.proyectoUsuario )
      this.serviceProyectoUsuario.agregarProyectoUsuario(this.proyectoUsuario)
            .subscribe(resp => console.log(resp))
            alert('agregado')

    } 
}

