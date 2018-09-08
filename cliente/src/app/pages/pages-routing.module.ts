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

const routes: Routes = [
    {
        path: '', component: PageComponent,
        children: [
            // rutas  tipo usuariuo
            {  path: 'tipousuarios',
                // canActivate: [AuthGuard],
                component: TipousuarioComponent,
                children: [{
                    path: '',
                    redirectTo: 'listar',
                    pathMatch: 'full'
                }, {
                    path: 'listar',
                    component: TipousuarioIndexComponent,
                    data: {
                        title: 'LISTA DE CARGOS',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'NUEVO REGISTRO',
                            url: '/tipousuarios/crear'
                        }, {
                            title: 'CARGO USUARIO'
                        }]
                    }
                }, {
                    path: 'crear',
                    component: TipousuarioCreateComponent,
                    data: {
                        title: 'CREAR CARGO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO',
                            url: '/tipousuarios/listar'
                        }, {
                            title: 'NUEVO REGISTRO'
                        }]
                    }
                }, {
                    path: 'editar/:id',
                    component: TipousuarioEditComponent,
                    data: {
                        title: 'EDITAR CARGO',
                        urls: [{
                            title: 'INICIO',
                            url: '/acceso/dashboard'
                        }, {
                            title: 'LISTADO',
                            url: '/tipousuarios/listar'
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
                    path: '',
                    redirectTo: 'listar',
                    pathMatch: 'full'
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
                },
            { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
            { path: 'accordion', loadChildren: './component/accordion/accordion.module#AccordionModule' },
            { path: 'alert', loadChildren: './component/alert/alert.module#NgAlertModule' },
            { path: 'carousel', loadChildren: './component/carousel/carousel.module#ButtonsModule' },
            { path: 'datepicker', loadChildren: './component/datepicker/datepicker.module#DatepickerModule' },
            { path: 'dropdown', loadChildren: './component/dropdown-collapse/dropdown-collapse.module#DropdownModule' },
            { path: 'modal', loadChildren: './component/modal/modal.module#ModalModule' },
            { path: 'pagination', loadChildren: './component/pagination/pagination.module#paginationModule' },
            { path: 'poptool', loadChildren: './component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule' },
            { path: 'progressbar', loadChildren: './component/progressbar/progressbar.module#progressbarModule' },
            { path: 'rating', loadChildren: './component/rating/rating.module#RatingModule' },
            { path: 'tabs', loadChildren: './component/tabs/tabs.module#TabsModule' },
            { path: 'timepicker', loadChildren: './component/timepicker/timepicker.module#TimepickerModule' },
            { path: 'typehead', loadChildren: './component/typehead/typehead.module#TypeheadModule' }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
