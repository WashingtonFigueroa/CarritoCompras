import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {PerfilComponent} from './perfil/perfil.component';
import {CarritoComponent} from './carrito/carrito.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsuarioEditarComponent} from './usuario-edit/usuario-edit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    PerfilComponent,
    CarritoComponent,
    UsuarioEditarComponent,
    ChangePasswordComponent,
  ],
  declarations: [PerfilComponent, CarritoComponent, UsuarioEditarComponent, ChangePasswordComponent]
})
export class SharedModule { }
