import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import {InicioComponent} from './inicio.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import { ProductoComponent } from './producto/producto.component';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DesignComponent } from './design/design.component';
import { CamisaComponent } from './camisa/camisa.component';
import { CompraComponent } from './compra/compra.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageZoomModule.forRoot(),
    InicioRoutingModule,
    SharedModule
  ],
  declarations: [ HeaderComponent,
                  FooterComponent,
                  InicioComponent,
                  ProductosComponent,
                  CategoriasComponent,
                  ProductoComponent,
                  ImageZoomComponent,
                  DesignComponent,
                  CamisaComponent,
                  CompraComponent,
                  CuentaComponent],
  providers: []
})
export class InicioModule { }
