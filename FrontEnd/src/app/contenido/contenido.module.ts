
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoRoutingModule } from './contenido-routing.module';
import { HomeComponent } from './home/home.component';
import { AgregarProyecoUsuarioComponent } from './agregar-proyeco-usuario/agregar-proyeco-usuario.component';
import { AgregarProyectoComponent } from './agregar-proyecto/agregar-proyecto.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ProyectoUsuarioComponent } from './proyecto-usuario/proyecto-usuario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    HomeComponent,
    AgregarProyecoUsuarioComponent,
    AgregarProyectoComponent,
    AgregarUsuarioComponent,
    UsuariosComponent,
    ProyectosComponent,
    ProyectoUsuarioComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ]
})
export class ContenidoModule { }
