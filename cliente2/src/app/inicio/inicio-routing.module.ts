import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio.component';
import {ProductosComponent} from './productos/productos.component';

const routes: Routes = [
  {
    path : '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: ProductosComponent
      }
    ]
  }, {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
