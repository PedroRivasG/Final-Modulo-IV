import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './empleados/registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoComponent } from './empleados/listado/listado.component';
import { EditarComponent } from './empleados/editar/editar.component';

const routes: Routes = [
  {path: 'home', component: PrincipalComponent},
  {path: 'lista', component: ListadoComponent},
  {path: 'registro', component: RegistroComponent}, 
  {path: 'editar/:_id', component: EditarComponent},
  {path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
