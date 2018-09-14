import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio.component';
import {ProductosComponent} from './productos/productos.component';
import {CategoriasComponent} from './categorias/categorias.component';

const routes: Routes = [
  {
    path : '',
    component: InicioComponent,
    children: [
      {
        path: 'productos',
        component: ProductosComponent
      }, {
        path: 'categorias',
        component: CategoriasComponent
      }, {
        path: '',
        redirectTo: 'categorias'
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
