import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import {ClienteComponent} from './cliente.component';
import { ClienteHeaderComponent } from './cliente-header/cliente-header.component';
import { ClienteComprasComponent } from './cliente-compras/cliente-compras.component';
import { ClienteFacturacionComponent } from './cliente-facturacion/cliente-facturacion.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteComponent, ClienteHeaderComponent, ClienteComprasComponent, ClienteFacturacionComponent]
})
export class ClienteModule { }
