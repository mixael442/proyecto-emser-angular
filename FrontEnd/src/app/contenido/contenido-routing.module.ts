import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoUsuarioComponent } from './proyecto-usuario/proyecto-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AgregarProyectoComponent } from './agregar-proyecto/agregar-proyecto.component';
import { AgregarProyecoUsuarioComponent } from './agregar-proyeco-usuario/agregar-proyeco-usuario.component';




const routes: Routes = [

{
  path:'',
  component:HomeComponent,
  children:[
    {path:"usuarios", component:UsuariosComponent},
    {path:"proyectos", component:ProyectosComponent},
    {path:"proyecto-usuario", component:ProyectoUsuarioComponent},
    {path:"agregarusuario", component:AgregarUsuarioComponent},
    {path:"editarusuario/:id", component:AgregarUsuarioComponent},
    {path:"agregarproyecto", component:AgregarProyectoComponent},
    {path:"editarproyecto/:id", component:AgregarProyectoComponent},
    {path:"agregar-pu", component:AgregarProyecoUsuarioComponent},
    {path:"editar-pu/:id", component:AgregarProyecoUsuarioComponent},
    {path:"**", redirectTo: 'usuarios'},
  ] 
},

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
