import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente.component';
import {ClienteComprasComponent} from './cliente-compras/cliente-compras.component';
import {ClienteFacturacionComponent} from './cliente-facturacion/cliente-facturacion.component';
import {PerfilComponent} from '../shared/perfil/perfil.component';
import {CarritoComponent} from '../shared/carrito/carrito.component';
import {UsuarioEditarComponent} from '../shared/usuario-edit/usuario-edit.component';
import {ChangePasswordComponent} from '../shared/change-password/change-password.component';
import {ClienteListaDeseosComponent} from './cliente-lista-deseos/cliente-lista-deseos.component';

const routes: Routes = [{
  path: '',
  component : ClienteComponent,
  children: [
    {
      path: 'perfil',
      component: PerfilComponent
    },
    {
      path: 'editar-usuario/:usuario_id',
      component: UsuarioEditarComponent
    },
    {
      path: 'cambiar-password',
      component: ChangePasswordComponent
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
      path: 'lista-deseos',
      component: ClienteListaDeseosComponent
    },
    {
      path: '',
      redirectTo: 'carrito',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
