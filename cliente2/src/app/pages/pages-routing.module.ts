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
import {PromocionComponent} from './component/promocion/promocion.component';
import {PromocionIndexComponent} from './component/promocion/promocion-index/promocion-index.component';
import {PromocionCreateComponent} from './component/promocion/promocion-create/promocion-create.component';
import {PromocionEditComponent} from './component/promocion/promocion-edit/promocion-edit.component';
import {InventarioComponent} from './component/inventario/inventario.component';
import {InventarioIndexComponent} from './component/inventario/inventario-index/inventario-index.component';
import {InventarioCreateComponent} from './component/inventario/inventario-create/inventario-create.component';
import {InventarioEditComponent} from './component/inventario/inventario-edit/inventario-edit.component';
import {ManillasComponent} from './component/manillas/manillas.component';
import {ManillasIndexComponent} from './component/manillas/manillas-index/manillas-index.component';
import {ManillasCreateComponent} from './component/manillas/manillas-create/manillas-create.component';
import {ManillasEditComponent} from './component/manillas/manillas-edit/manillas-edit.component';
import {CamisaComponent} from "./component/camisa/camisa.component";
import {CamisaIndexComponent} from "./component/camisa/camisa-index/camisa-index.component";
import {CamisaCreateComponent} from "./component/camisa/camisa-create/camisa-create.component";
import {CamisaEditComponent} from "./component/camisa/camisa-edit/camisa-edit.component";

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            // ruta principal
            {
                path: 'principal',
                // canActivate: [AuthGuard],
                component: ComprasComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: ComprasIndexComponent,
                    data: {
                        title: 'Bienvenidos'
                    }
                }]
            },
            {
              path: 'inventarios',
              component: InventarioComponent,
              children: [
                { path: '', redirectTo: 'listar', pathMatch: 'full'},
                {
                  path: 'listar',
                  component: InventarioIndexComponent,
                  data: {
                    title: 'INVENTARIO PRODUCTOS',
                    urls: [{
                      title: 'INICIO', url: '/admin/principal/listar'
                    }, {
                      title: 'NUEVO REGISTRO', url: 'inventarios/crear'
                    }, {
                      title: 'PRODUCTOS'
                    }]
                  }
                },
                {
                  path: 'crear',
                  component: InventarioCreateComponent,
                  data: {
                    title: 'CREA DETALLE DE PRODUCTO',
                    urls: [{
                      title: 'INICIO', url: '/admin/principal/listar'
                    }, {
                      title: 'INVENTARIO ', url: 'inventarios/listar'
                    }, {
                      title: 'DETALLE PRODUCTO'
                    }]
                  }
                },
                {
                  path: 'editar/:id',
                  component: InventarioEditComponent,
                  data: {
                    title: 'EDITAR DETALLE DE PRODUCTO',
                    urls: [{
                      title: 'INICIO', url: '/admin/principal/listar'
                    }, {
                      title: 'INVENTARIO PRODUCTOS', url: 'inventarios/listar'
                    }, {
                      title: 'EDITAR PRODUCTO'
                    }]
                  }
                },
              ]
            },
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
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'tipousuarios/crear'
                        }, {
                            title: 'CARGO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: TipousuarioCreateComponent,
                    data: {
                        title: 'CREAR CARGO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'tipousuarios/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: TipousuarioEditComponent,
                    data: {
                        title: 'EDITAR CARGO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'tipousuarios/listar'
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
                            url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO',
                            url: 'usuarios/crear'
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
                            url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO',
                            url: 'usuarios/listar'
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
                            url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO',
                            url: 'usuarios/listar'
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
                            url: '/admin/principal/listar'
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
                            url: '/admin/principal/listar'
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
                            url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO',
                            url: 'privilegios/listar'
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
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'categorias/crear'
                        }, {
                            title: 'CATEGORIA USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: CategoriasCreateComponent,
                    data: {
                        title: 'CREAR CATEGORIA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'categorias/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: CategoriasEditComponent,
                    data: {
                        title: 'EDITAR CATEGORIA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'categorias/listar'
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
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'productos/crear'
                        }, {
                            title: 'PRODUCTO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ProductoCreateComponent,
                    data: {
                        title: 'CREAR PRODUCTO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'productos/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ProductoEditComponent,
                    data: {
                        title: 'EDITAR PRODUCTO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'productos/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  promociones
            {
                path: 'promociones',
                // canActivate: [AuthGuard],
                component: PromocionComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: PromocionIndexComponent,
                    data: {
                        title: 'LISTA PROMOCIONES', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'promociones/crear'
                        }, {
                            title: 'PROMOCIÓN'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: PromocionCreateComponent,
                    data: {
                        title: 'CREAR PROMOCION', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'promociones/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: PromocionEditComponent,
                    data: {
                        title: 'EDITAR PROMOCION', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'promociones/listar'
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
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'articulos/crear'
                        }, {
                            title: 'ARTICULO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ArticulosCreateComponent,
                    data: {
                        title: 'CREAR ARTICULO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'articulos/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ArticulosEditComponent,
                    data: {
                        title: 'EDITAR ARTICULO', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'articulos/listar'
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
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'compras/crear'
                        }, {
                            title: 'COMPRA USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ComprasCreateComponent,
                    data: {
                        title: 'CREAR COMPRA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'compras/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ComprasEditComponent,
                    data: {
                        title: 'EDITAR COMPRA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'compras/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  manillas
            {
                path: 'manillas',
                // canActivate: [AuthGuard],
                component: ManillasComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: ManillasIndexComponent,
                    data: {
                        title: 'LISTA DE MATERIAL', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'manillas/crear'
                        }, {
                            title: 'LISTA MATERIALES'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: ManillasCreateComponent,
                    data: {
                        title: 'CREAR MATERIAL', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'manillas/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: ManillasEditComponent,
                    data: {
                        title: 'EDITAR MATERIAL', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'manillas/listar'
                        }, {
                            title: 'MODIFICACIÓN'
                        }]
                    }
                }]
            },
            // rutas  camisas
            {
                path: 'camisas',
                // canActivate: [AuthGuard],
                component: CamisaComponent,
                children: [{path: '', redirectTo: 'listar', pathMatch: 'full'}, {
                    path: 'listar',
                    component: CamisaIndexComponent,
                    data: {
                        title: 'LISTA DE TELAS', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'NUEVO REGISTRO', url: 'camisas/crear'
                        }, {
                            title: 'LISTA TELAS'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: CamisaCreateComponent,
                    data: {
                        title: 'CREAR TELA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'camisas/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: CamisaEditComponent,
                    data: {
                        title: 'EDITAR TELA', urls: [{
                            title: 'INICIO', url: '/admin/principal/listar'
                        }, {
                            title: 'LISTADO', url: 'camisas/listar'
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
