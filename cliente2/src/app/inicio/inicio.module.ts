import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {InicioComponent} from './inicio.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, InicioComponent, ProductosComponent]
})
export class InicioModule { }
