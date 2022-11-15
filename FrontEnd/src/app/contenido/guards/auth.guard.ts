import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ServicesUsuariosService } from '../services/services-usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private http: ServicesUsuariosService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>| boolean {

    return this.http.verifica().pipe(
      tap(resp => {
        if(!resp){
          this.router.navigate(['/login'])
        }
      })
    )

   //if(this.http.auth.id){
    //return true;
   //}
   //return false
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {

    return this.http.verifica().pipe(
      tap(resp => {
        if(!resp){
          this.router.navigate(['/login'])
        }
      })
    )
   //if(this.http.auth.id){
    //return true;
   //}
   //return false
  }
}
