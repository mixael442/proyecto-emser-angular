import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario} from '../interfaces/interfaces';
import { of, tap, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesUsuariosService {

  private _auth:Usuario | undefined;

  get auth(): Usuario{
    return {...this._auth!};
  }

  getUsuario() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get<Usuario[]>('http://127.0.0.1:8000/api/usuarios/')
  }

  getUsuarioId(id:number){
    return this.http.get<Usuario>(`http://127.0.0.1:8000/api/usuarios/retrieve/${id}/`)
  }

  agregarUsuarios(usuario: Usuario){
    return this.http.post<Usuario>('http://127.0.0.1:8000/api/usuarios/create/', usuario)
  }

  actualizarUsuario(usuario: Usuario){
    return this.http.put<Usuario>(`http://127.0.0.1:8000/api/usuarios/update/${usuario.id}/`, usuario)
  }

  borrarUsuario(id:number){
    return this.http.delete<any>(`http://127.0.0.1:8000/api/usuarios/destroy/${id}/`)
  }

  verifica(): Observable<boolean>{

  if(!localStorage.getItem('id')){
     return this.http.get<Usuario>(`http://127.0.0.1:8000/api/usuarios/retrieve/17/`)
                .pipe(
                    map(resp => {this._auth = resp; return true}))
   } else {

    return this.http.get<Usuario>(`http://127.0.0.1:8000/api/usuarios/retrieve/4/`)
                .pipe(
                  map(resp => {this._auth = resp; return true}))

   }

      
  }

  login1(){
    return this.http.get<Usuario>(`http://127.0.0.1:8000/api/usuarios/retrieve/4/`)
                    .pipe(
                      tap(auth => this._auth = auth),
                      tap(auth => localStorage.setItem('id', JSON.stringify(auth.id)))
                      );
  }

  login2(){
    return this.http.get<Usuario>(`http://127.0.0.1:8000/api/usuarios/retrieve/17/`)
                    .pipe(
                      tap(auth => this._auth = auth),
                      tap(auth => localStorage.setItem('id2', JSON.stringify(auth.id)))
                      );
  }

  logout(){ 
    this._auth = undefined;
  }

  
}
