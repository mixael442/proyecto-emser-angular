import { Component, OnInit } from '@angular/core';
import { ServicesProyectosService } from '../services/services-proyectos.service';
import { Proyecto } from '../interfaces/interfaces';
import { ServicesUsuariosService } from '../services/services-usuarios.service';



@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',

})
export class ProyectosComponent implements OnInit {

  proyectos!:Proyecto[];
  get auth(){
    return this.usuarioService.auth
  }
  constructor(private proyectoService:ServicesProyectosService,
              private usuarioService:ServicesUsuariosService) { }

  ngOnInit():void{
    this.proyectoService.getProyecto()
          .subscribe(resp => this.proyectos = resp)
  }

  eliminar(proyecto_id:any){
    if(confirm(`Seguro que quieres eliminar a ${proyecto_id.nombre}`)){ 
      this.proyectoService.borrarProyecto(proyecto_id)
            .subscribe(resp => 
              alert('eliminado'))
              window.location.reload();
      } else {
        return;
      }

    
  }

}
