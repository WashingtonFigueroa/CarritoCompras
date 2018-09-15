import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../shared/sidebar.directive';

import { NavigationComponent } from '../shared/header-navigation/navigation.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { TipousuarioComponent } from './component/tipousuario/tipousuario.component';
import { TipousuarioIndexComponent } from './component/tipousuario/tipousuario-index/tipousuario-index.component';
import { TipousuarioCreateComponent } from './component/tipousuario/tipousuario-create/tipousuario-create.component';
import { TipousuarioEditComponent } from './component/tipousuario/tipousuario-edit/tipousuario-edit.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioIndexComponent } from './component/usuario/usuario-index/usuario-index.component';
import { UsuarioEditComponent } from './component/usuario/usuario-edit/usuario-edit.component';
import { UsuarioCreateComponent } from './component/usuario/usuario-create/usuario-create.component';
import { PrivilegioComponent } from './component/privilegio/privilegio.component';
import { PrivilegioIndexComponent } from './component/privilegio/privilegio-index/privilegio-index.component';
import { PrivilegioEditComponent } from './component/privilegio/privilegio-edit/privilegio-edit.component';
import { PrivilegioCreateComponent } from './component/privilegio/privilegio-create/privilegio-create.component';
import {PrivilegioService} from './component/privilegio/privilegio.service';
import {UsuarioService} from './component/usuario/usuario.service';
import {TipousuarioService} from './component/tipousuario/tipousuario.service';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { CategoriasComponent } from './component/categorias/categorias.component';

import { ProductoComponent } from './component/producto/producto.component';
import { ProductoIndexComponent } from './component/producto/producto-index/producto-index.component';
import { ProductoEditComponent } from './component/producto/producto-edit/producto-edit.component';
import { ProductoCreateComponent } from './component/producto/producto-create/producto-create.component';
import { ArticulosComponent } from './component/articulos/articulos.component';
import { ArticulosIndexComponent } from './component/articulos/articulos-index/articulos-index.component';
import { ArticulosEditComponent } from './component/articulos/articulos-edit/articulos-edit.component';
import { ArticulosCreateComponent } from './component/articulos/articulos-create/articulos-create.component';
import { ComprasComponent } from './component/compras/compras.component';
import { ComprasIndexComponent } from './component/compras/compras-index/compras-index.component';
import { ComprasEditComponent } from './component/compras/compras-edit/compras-edit.component';
import { ComprasCreateComponent } from './component/compras/compras-create/compras-create.component';
import { CategoriasIndexComponent } from './component/categorias/categorias-index/categorias-index.component';
import { CategoriasEditComponent } from './component/categorias/categorias-edit/categorias-edit.component';
import { CategoriasCreateComponent } from './component/categorias/categorias-create/categorias-create.component';
import {CategoriasService} from './component/categorias/categorias.service';
import {ProductoService} from './component/producto/producto.service';
import {ArticulosService} from './component/articulos/articulos.service';
import {ComprasService} from './component/compras/compras.service';
import { DescripcionProductoComponent } from './component/descripcion-producto/descripcion-producto.component';
import { PromocionComponent } from './component/promocion/promocion.component';
import { PromocionIndexComponent } from './component/promocion/promocion-index/promocion-index.component';
import { PromocionEditComponent } from './component/promocion/promocion-edit/promocion-edit.component';
import { PromocionCreateComponent } from './component/promocion/promocion-create/promocion-create.component';
import {PromocionService} from './component/promocion/promocion.service';
import { InventarioComponent } from './component/inventario/inventario.component';
import { InventarioIndexComponent } from './component/inventario/inventario-index/inventario-index.component';
import { InventarioEditComponent } from './component/inventario/inventario-edit/inventario-edit.component';
import { InventarioCreateComponent } from './component/inventario/inventario-create/inventario-create.component';
import {InventarioService} from './component/inventario/inventario.service';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgbModalModule,
        FormsModule,
        ReactiveFormsModule,
        JsonpModule,
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        BreadcrumbComponent,
        SidebarComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        TipousuarioComponent,
        TipousuarioIndexComponent,
        TipousuarioCreateComponent,
        TipousuarioEditComponent,
        UsuarioComponent,
        UsuarioIndexComponent,
        UsuarioEditComponent,
        UsuarioCreateComponent,
        PrivilegioComponent,
        PrivilegioIndexComponent,
        PrivilegioEditComponent,
        PrivilegioCreateComponent,
        CategoriasComponent,
        ProductoComponent,
        ProductoIndexComponent,
        ProductoEditComponent,
        ProductoCreateComponent,
        ArticulosComponent,
        ArticulosIndexComponent,
        ArticulosEditComponent,
        ArticulosCreateComponent,
        ComprasComponent,
        ComprasIndexComponent,
        ComprasEditComponent,
        ComprasCreateComponent,
        CategoriasIndexComponent,
        CategoriasEditComponent,
        CategoriasCreateComponent,
        DescripcionProductoComponent,
        PromocionComponent,
        PromocionIndexComponent,
        PromocionEditComponent,
        PromocionCreateComponent,
        InventarioComponent,
        InventarioIndexComponent,
        InventarioEditComponent,
        InventarioCreateComponent
    ],
    providers: [
        TipousuarioService,
        UsuarioService,
        PrivilegioService,
        CategoriasService,
        ProductoService,
        ArticulosService,
        ComprasService,
        PromocionService,
        InventarioService
    ]
})
export class PagesModule { }
