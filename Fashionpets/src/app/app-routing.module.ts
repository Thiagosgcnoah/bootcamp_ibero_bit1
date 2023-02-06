import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ErrorComponent } from './components/error/error.component';
import { TiendaGatosComponent } from './components/tienda-gatos/tienda-gatos.component';
import { TiendaPerrosComponent } from './components/tienda-perros/tienda-perros.component';

const routes: Routes = [
  {path:'body', component:BodyComponent},
  {path:'TiendaGatos', component: TiendaGatosComponent},
  {path:'TiendaPerros', component: TiendaPerrosComponent},
  {path:'404', component: ErrorComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
