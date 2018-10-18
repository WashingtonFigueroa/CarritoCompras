import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente.component';
import {ClienteComprasComponent} from './cliente-compras/cliente-compras.component';
import {ClienteFacturacionComponent} from './cliente-facturacion/cliente-facturacion.component';

const routes: Routes = [{
  path: '',
  component : ClienteComponent,
  children: [
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
      redirectTo: 'compras',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
