import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { ServicesUsuariosService } from '../services/services-usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
    
  ]
})
export class UsuariosComponent implements OnInit {
  
  usuarios!:Usuario[];
  get auth(){
    return this.usuarioService.auth
  }
  constructor(private usuarioService: ServicesUsuariosService) { }

  ngOnInit(): void {
    
    this.usuarioService.getHeroes()
        .subscribe(
          usuarios => {
            this.usuarios = usuarios;
          }
        )
  }

  eliminar(usuario_id:any){
    
    if(confirm(`Seguro que quieres eliminar a ${usuario_id.nombre}`)){ 
                this.usuarioService.borrarUsuario(usuario_id)
                      .subscribe(resp => 
                        alert('eliminado'))
                        window.location.reload();
    } else {
      return;
    }
    
  }

}
