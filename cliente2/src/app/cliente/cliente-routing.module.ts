import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente.component';
import {ClienteComprasComponent} from './cliente-compras/cliente-compras.component';
import {ClienteFacturacionComponent} from './cliente-facturacion/cliente-facturacion.component';
import {PerfilComponent} from '../shared/perfil/perfil.component';
import {CarritoComponent} from '../shared/carrito/carrito.component';

const routes: Routes = [{
  path: '',
  component : ClienteComponent,
  children: [
    {
      path: 'perfil',
      component: PerfilComponent
    },
    {
      path: 'carrito',
      component: CarritoComponent
    },
    {
      path: 'compras',
      component: ClienteComprasComponent
    },
    {
      path: 'facturacion',
      component: ClienteFacturacionComponent
    },
    {
      path: '',
      redirectTo: 'perfil',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
