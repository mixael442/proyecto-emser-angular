import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServicesUsuariosService } from '../services/services-usuarios.service';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {



  usuarioAgregar:Usuario = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    phone_number: '',
    email: '',
  }
  
  constructor(private route:ActivatedRoute,
              private router:Router,
              private serviceUsuario: ServicesUsuariosService) { }

  ngOnInit(): void {
    this.route.params
        .pipe(
          switchMap(({id})=> this.serviceUsuario.getUsuarioId(id))
        )
        .subscribe(resp => this.usuarioAgregar = resp)
  }

  guardar(){

    this.router.navigate(['/home/usuarios'])
    if(this.usuarioAgregar.nombre.trim().length=== 0){
      return;
    }
     
    if(this.usuarioAgregar.id){
       this.serviceUsuario.actualizarUsuario(this.usuarioAgregar)
                  .subscribe(
                    usuario=> console.log('Listo', usuario) )
                    alert('Actualizado')
    }else {
       this.serviceUsuario.agregarUsuarios(this.usuarioAgregar)
                  .subscribe(resp => console.log('Listo', resp))
                  alert('agregado')
    } 
  }
}
