import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {InicioComponent} from './inicio.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import {InicioService} from './inicio.service';
import { CategoriasComponent } from './categorias/categorias.component';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import { ProductoComponent } from './producto/producto.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import {FormsModule} from '@angular/forms';
import { DesignComponent } from './design/design.component';
import { CamisaComponent } from './camisa/camisa.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxImageZoomModule.forRoot(),
    InicioRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, InicioComponent, ProductosComponent, CategoriasComponent, ProductoComponent, ImageZoomComponent, DesignComponent, CamisaComponent, CarritoComponent, CompraComponent],
  providers: [InicioService]
})
export class InicioModule { }
