import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ServicesProyectosService } from '../services/services-proyectos.service';
import { Proyecto } from '../interfaces/interfaces';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute,
              private serviceProyecto:ServicesProyectosService) { }

  ngOnInit(): void {
    this.route.params
        .pipe(
          switchMap(({id})=> this.serviceProyecto.getProyectoId(id))
        )
        .subscribe(resp => this.proyectoAgregar = resp)
  }

  proyectoAgregar:Proyecto = {
    nombre: '',
    activo: true
  }

  guardar(){

    this.router.navigate(['/home/proyectos'])
    if(this.proyectoAgregar.nombre.trim().length=== 0){
      return;
    }
     
    if(this.proyectoAgregar.id){
       this.serviceProyecto.actualizarProyecto(this.proyectoAgregar)
                  .subscribe(
                    proyecto=> console.log('Listo', proyecto) )
                    alert('Actualizado')
    }else {

       this.serviceProyecto.agregarProyecto(this.proyectoAgregar)
                  .subscribe(resp => console.log('Listo', resp))
                  alert('agregado')
    } 
  }


}
