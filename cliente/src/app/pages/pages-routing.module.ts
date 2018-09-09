import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './pages.component';
import {TipousuarioComponent} from './component/tipousuario/tipousuario.component';
import {TipousuarioIndexComponent} from './component/tipousuario/tipousuario-index/tipousuario-index.component';
import {TipousuarioCreateComponent} from './component/tipousuario/tipousuario-create/tipousuario-create.component';
import {TipousuarioEditComponent} from './component/tipousuario/tipousuario-edit/tipousuario-edit.component';
import {UsuarioComponent} from './component/usuario/usuario.component';
import {UsuarioIndexComponent} from './component/usuario/usuario-index/usuario-index.component';
import {UsuarioCreateComponent} from './component/usuario/usuario-create/usuario-create.component';
import {UsuarioEditComponent} from './component/usuario/usuario-edit/usuario-edit.component';
import {PrivilegioComponent} from './component/privilegio/privilegio.component';
import {PrivilegioIndexComponent} from './component/privilegio/privilegio-index/privilegio-index.component';
import {PrivilegioCreateComponent} from './component/privilegio/privilegio-create/privilegio-create.component';
import {PrivilegioEditComponent} from './component/privilegio/privilegio-edit/privilegio-edit.component';
import {CategoriasComponent} from './component/categorias/categorias.component';
import {CategoriasIndexComponent} from './component/categorias/categorias-index/categorias-index.component';
import {CategoriasCreateComponent} from './component/categorias/categorias-create/categorias-create.component';
import {CategoriasEditComponent} from './component/categorias/categorias-edit/categorias-edit.component';
import {ProductoComponent} from './component/producto/producto.component';
import {ProductoIndexComponent} from './component/producto/producto-index/producto-index.component';
import {ProductoCreateComponent} from './component/producto/producto-create/producto-create.component';
import {ProductoEditComponent} from './component/producto/producto-edit/producto-edit.component';
import {ArticulosComponent} from './component/articulos/articulos.component';
import {ArticulosIndexComponent} from './component/articulos/articulos-index/articulos-index.component';
import {ArticulosCreateComponent} from './component/articulos/articulos-create/articulos-create.component';
import {ArticulosEditComponent} from './component/articulos/articulos-edit/articulos-edit.component';
import {ComprasComponent} from './component/compras/compras.component';
import {ComprasIndexComponent} from './component/compras/compras-index/compras-index.component';
import {ComprasCreateComponent} from './component/compras/compras-create/compras-create.component';
import {ComprasEditComponent} from './component/compras/compras-edit/compras-edit.component';

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            // rutas  tipo usuariuo
            {
                path: 'tipousuarios',
                // canActivate: [AuthGuard],
                component: TipousuarioComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: TipousuarioIndexComponent,
                    data: {
                        title: 'LISTA DE CARGOS', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO', url: '/tipousuarios/crear'
                        }, {
                            title: 'CARGO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: TipousuarioCreateComponent,
                    data: {
                        title: 'CREAR CARGO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/tipousuarios/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: TipousuarioEditComponent,
                    data: {
                        title: 'EDITAR CARGO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/tipousuarios/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas usuarios
            {
                path: 'usuarios',
                // canActivate: [AuthGuard],
                component: UsuarioComponent,
                children: [{
                    path: '',
                    redirectTo: 'listar',
                    pathMatch: 'full'
                }, {
                    path: 'listar',
                    component: UsuarioIndexComponent,
                    data: {
                        title: 'LISTA USUARIOS',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO',
                            url: '/usuarios/crear'
                        }, {
                            title: 'USUARIOS'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: UsuarioCreateComponent,
                    data: {
                        title: 'CREAR USUARIO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO',
                            url: '/usuarios/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: UsuarioEditComponent,
                    data: {
                        title: 'EDITAR USUARIOS',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO',
                            url: '/usuarios/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            {
                path: 'privilegios',
                component: PrivilegioComponent,
                // canActivate: [AuthGuard],
                children: [{
                    path: '', redirectTo: 'listar', pathMatch: 'full'
                }, {
                    path: 'listar',
                    component: PrivilegioIndexComponent,
                    data: {
                        title: 'ADMINISTRAR PRIVILEGIO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'ASIGNACIÓN PRIVILEGIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: PrivilegioCreateComponent,
                    data: {
                        title: 'ADMINISTRAR PRIVILEGIO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'ASIGNACIÓN PRIVILEGIO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: PrivilegioEditComponent,
                    data: {
                        title: 'EDITAR PRIVILEGIO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO',
                            url: '/privilegios/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  categorias
            {
                path: 'categorias',
                // canActivate: [AuthGuard],
                component: CategoriasComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: CategoriasIndexComponent,
                    data: {
                        title: 'LISTA DE CATEGORIAS', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO', url: '/categorias/crear'
                        }, {
                            title: 'CATEGORIA USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: CategoriasCreateComponent,
                    data: {
                        title: 'CREAR CATEGORIA', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/categorias/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: CategoriasEditComponent,
                    data: {
                        title: 'EDITAR CATEGORIA', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/categorias/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  productos
            {
                path: 'productos',
                // canActivate: [AuthGuard],
                component: ProductoComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: ProductoIndexComponent,
                    data: {
                        title: 'LISTA DE PRODUCTOS', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO', url: '/productos/crear'
                        }, {
                            title: 'PRODUCTO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ProductoCreateComponent,
                    data: {
                        title: 'CREAR PRODUCTO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/productos/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ProductoEditComponent,
                    data: {
                        title: 'EDITAR PRODUCTO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/productos/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  articulos
            {
                path: 'articulos',
                // canActivate: [AuthGuard],
                component: ArticulosComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: ArticulosIndexComponent,
                    data: {
                        title: 'LISTA DE ARTICULOS', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO', url: '/articulos/crear'
                        }, {
                            title: 'ARTICULO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ArticulosCreateComponent,
                    data: {
                        title: 'CREAR ARTICULO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/articulos/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ArticulosEditComponent,
                    data: {
                        title: 'EDITAR ARTICULO', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/articulos/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  compras
            {
                path: 'compras',
                // canActivate: [AuthGuard],
                component: ComprasComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: ComprasIndexComponent,
                    data: {
                        title: 'LISTA DE COMPRAS', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO', url: '/compras/crear'
                        }, {
                            title: 'COMPRA USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ComprasCreateComponent,
                    data: {
                        title: 'CREAR COMPRA', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/compras/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ComprasEditComponent,
                    data: {
                        title: 'EDITAR COMPRA', urls: [{
                            title: 'INICIO', url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO', url: '/compras/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            }]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
