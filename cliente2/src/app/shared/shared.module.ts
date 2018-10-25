import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {PerfilComponent} from './perfil/perfil.component';
import {CarritoComponent} from './carrito/carrito.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    PerfilComponent,
    CarritoComponent
  ],
  declarations: [PerfilComponent, CarritoComponent]
})
export class SharedModule { }
