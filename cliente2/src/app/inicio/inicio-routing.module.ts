import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio.component';
import {ProductosComponent} from './productos/productos.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {ProductoComponent} from './producto/producto.component';
import {DesignComponent} from './design/design.component';
import {CamisaComponent} from "./camisa/camisa.component";
import {CarritoComponent} from './carrito/carrito.component';
import {CompraComponent} from './compra/compra.component';

const routes: Routes = [
  {
    path : '',
    component: InicioComponent,
    children: [
      {
        path: 'productos/:categoria_id',
        component: ProductosComponent,
        data: {
          value: [{'clave': 'valor'}]
        }
      },
      {
        path: 'producto/:producto_id',
        component: ProductoComponent
      },
      {
        path: 'categorias',
        component: CategoriasComponent
      }, {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'camisas',
        component: CamisaComponent
      },
      {
        path: 'carrito',
        component: CarritoComponent
      },
      {
        path: 'compra',
        component: CompraComponent
      },
      {
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
