import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'producto', component: ProductoComponent }
//  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }