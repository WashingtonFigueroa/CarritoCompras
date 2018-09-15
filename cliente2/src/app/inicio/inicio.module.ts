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
import {NgxImageZoomModule} from 'ngx-image-zoom';
import { ProductoComponent } from './producto/producto.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';

@NgModule({
  imports: [
    CommonModule,
    NgxImageZoomModule.forRoot(),
    UICarouselModule,
    InicioRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, InicioComponent, ProductosComponent, CategoriasComponent, ProductoComponent, ImageZoomComponent],
  providers: [InicioService]
})
export class InicioModule { }
