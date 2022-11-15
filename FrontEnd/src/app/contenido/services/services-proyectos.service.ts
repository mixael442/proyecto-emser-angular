import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesProyectosService {

  constructor(private http:HttpClient) { }

  getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>('http://127.0.0.1:8000/api/proyecto/');
  }

  getProyectoId(id:number){
    return this.http.get<Proyecto>(`http://127.0.0.1:8000/api/proyecto/retrieve/${id}/`)
  }

  agregarProyecto(proyecto: Proyecto){
    return this.http.post<Proyecto>('http://127.0.0.1:8000/api/proyecto/create/', proyecto)
  }

  actualizarProyecto(proyecto: Proyecto){
    return this.http.put<Proyecto>(`http://127.0.0.1:8000/api/proyecto/update/${proyecto.id}/`, proyecto)
  }

  borrarProyecto(id:number){
    return this.http.delete<any>(`http://127.0.0.1:8000/api/proyecto/destroy/${id}/`)
  }
}
