import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { validaruserGuard } from './guards/validaruser.guard';
import { activosComponent } from './modulos/activos/activos.component';



const routes: Routes =[
  {
    path: '', component: PrincipalComponent,
    canActivate: [validaruserGuard],
      children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'activos', component:activosComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
  },
  {path: 'login', component:LoginComponent },
];


//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
