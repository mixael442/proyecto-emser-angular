import { Component, OnInit } from '@angular/core';
import { ProyectoUsuario } from '../interfaces/interfaces';
import { ServicesProyectoUsuarioService } from '../services/services-proyecto-usuario.service';
import { ServicesUsuariosService } from '../services/services-usuarios.service';

@Component({
  selector: 'app-proyecto-usuario',
  templateUrl: './proyecto-usuario.component.html',
 
})
export class ProyectoUsuarioComponent implements OnInit {

  proyectoUsuario!:ProyectoUsuario[];
  get auth(){
    return this.usuarioService.auth
  }
  constructor(private proyectoUsuarioService:ServicesProyectoUsuarioService,
              private usuarioService:ServicesUsuariosService) { }

  ngOnInit():void{
    this.proyectoUsuarioService.getProyectoUsuario()
          .subscribe(resp => this.proyectoUsuario = resp)
  }

  eliminar(proyectousuario_id:any){
    if(confirm(`Seguro que quieres eliminar a ${proyectousuario_id.nombre}`)){ 
      this.proyectoUsuarioService.borrarProyectoUsuario(proyectousuario_id)
            .subscribe(resp => 
              alert('eliminado'))
              window.location.reload();
      } else {
        return;
      }
    
  }

}
