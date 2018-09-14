import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {InicioComponent} from './inicio.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import {InicioService} from './inicio.service';
import { CategoriasComponent } from './categorias/categorias.component';
import {UICarouselModule} from 'ui-carousel';

@NgModule({
  imports: [
    CommonModule,
    UICarouselModule,
    InicioRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, InicioComponent, ProductosComponent, CategoriasComponent],
  providers: [InicioService]
})
export class InicioModule { }
