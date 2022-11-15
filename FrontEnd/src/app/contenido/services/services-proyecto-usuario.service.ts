import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoUsuario, Proyecto, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesProyectoUsuarioService {

  constructor(private http:HttpClient) { }


  getProyectoUsuario():Observable<ProyectoUsuario[]>{
    return this.http.get<ProyectoUsuario[]>('http://127.0.0.1:8000/api/proyectousuarioview/');
  }

  agregarProyectoUsuario(proyectoUsuario:ProyectoUsuario){
    return this.http.post<ProyectoUsuario>('http://127.0.0.1:8000/api/proyectousuario/create/', proyectoUsuario )
  }

  borrarProyectoUsuario(id:number){
    return this.http.delete<any>(`http://127.0.0.1:8000/api/proyectousuario/destroy/${id}/`)
  }

}
