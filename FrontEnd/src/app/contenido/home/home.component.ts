import { Component, OnInit } from '@angular/core';
import { ServicesUsuariosService } from '../services/services-usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth(){
    return this.http.auth
  }

  constructor(private http:ServicesUsuariosService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}

}
