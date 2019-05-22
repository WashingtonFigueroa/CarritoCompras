import { NgModule } from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import {ClienteComponent} from './cliente.component';
import { ClienteHeaderComponent } from './cliente-header/cliente-header.component';
import { ClienteComprasComponent } from './cliente-compras/cliente-compras.component';
import { ClienteFacturacionComponent } from './cliente-facturacion/cliente-facturacion.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClienteListaDeseosComponent } from './cliente-lista-deseos/cliente-lista-deseos.component';
import {ClienteListaDeseosService} from './cliente-lista-deseos/cliente-lista-deseos.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ClienteRoutingModule,
    SharedModule,
  ],
  declarations: [
    ClienteComponent,
    ClienteHeaderComponent,
    ClienteComprasComponent,
    ClienteFacturacionComponent,
    ClienteListaDeseosComponent
  ],
  providers: [
    DecimalPipe,
    ClienteListaDeseosService,
  ]
})
export class ClienteModule { }
