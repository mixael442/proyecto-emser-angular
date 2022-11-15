import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './contenido/guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./contenido/contenido.module').then(m => m.ContenidoModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
