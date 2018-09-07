import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {FullComponent} from '../layouts/full/full.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioIndexComponent} from './usuario/usuario-index/usuario-index.component';
import {UsuarioCreateComponent} from './usuario/usuario-create/usuario-create.component';
import {UsuarioEditComponent} from './usuario/usuario-edit/usuario-edit.component';
import {PrivilegioComponent} from './privilegio/privilegio.component';
import {PrivilegioIndexComponent} from './privilegio/privilegio-index/privilegio-index.component';
import {TipousuarioComponent} from './tipousuario/tipousuario.component';
import {TipousuarioIndexComponent} from './tipousuario/tipousuario-index/tipousuario-index.component';
import {TipousuarioCreateComponent} from './tipousuario/tipousuario-create/tipousuario-create.component';
import {TipousuarioEditComponent} from './tipousuario/tipousuario-edit/tipousuario-edit.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {CategoriaIndexComponent} from './categoria/categoria-index/categoria-index.component';
import {CategoriaCreateComponent} from './categoria/categoria-create/categoria-create.component';
import {CategoriaEditComponent} from './categoria/categoria-edit/categoria-edit.component';
import {ProductoComponent} from './producto/producto.component';
import {ProductoIndexComponent} from './producto/producto-index/producto-index.component';
import {ProductoCreateComponent} from './producto/producto-create/producto-create.component';
import {ProductoEditComponent} from './producto/producto-edit/producto-edit.component';


export const MaterialRoutes: Routes = [{
    path: '',
    children: [
        {   path: 'usuarios',
            component: UsuarioComponent,
            // canActivate: [AuthGuard],
            children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                        { path: 'listar', component: UsuarioIndexComponent},
                        { path: 'crear', component: UsuarioCreateComponent},
                        { path: 'editar/:id', component: UsuarioEditComponent}]
        },
        {   path: 'privilegios',
            component: PrivilegioComponent,
            // canActivate: [AuthGuard],
            children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                { path: 'listar', component: PrivilegioIndexComponent}]
        },
        {   path: 'tipo_usuarios',
            component: TipousuarioComponent,
            // canActivate: [AuthGuard],
            children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                { path: 'listar', component: TipousuarioIndexComponent},
                { path: 'crear', component: TipousuarioCreateComponent},
                { path: 'editar/:id', component: TipousuarioEditComponent}]
        },
        {   path: 'categorias',
            component: CategoriaComponent,
            // canActivate: [AuthGuard],
            children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                { path: 'listar', component: CategoriaIndexComponent},
                { path: 'crear', component: CategoriaCreateComponent},
                { path: 'editar/:id', component: CategoriaEditComponent}]
        },
        {   path: 'productos',
            component: ProductoComponent,
            // canActivate: [AuthGuard],
            children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                { path: 'listar', component: ProductoIndexComponent},
                { path: 'crear', component: ProductoCreateComponent},
                { path: 'editar/:id', component: ProductoEditComponent}]
        },
        {
            path: 'button',
            component: ButtonsComponent
        },
        {
            path: 'button',
            component: ButtonsComponent
        }, {
            path: 'grid',
            component: GridComponent
        }, {
            path: 'lists',
            component: ListsComponent
        }, {
            path: 'menu',
            component: MenuComponent
        }, {
            path: 'tabs',
            component: TabsComponent
        }, {
            path: 'stepper',
            component: StepperComponent
        }, {
            path: 'expansion',
            component: ExpansionComponent
        }, {
            path: 'chips',
            component: ChipsComponent
        }, {
            path: 'toolbar',
            component: ToolbarComponent
        }, {
            path: 'progress-snipper',
            component: ProgressSnipperComponent
        }, {
            path: 'progress',
            component: ProgressComponent
        }, {
            path: 'dialog',
            component: DialogComponent
        }, {
            path: 'tooltip',
            component: TooltipComponent
        }, {
            path: 'snackbar',
            component: SnackbarComponent
        }, {
            path: 'slider',
            component: SliderComponent
        }, {
            path: 'slide-toggle',
            component: SlideToggleComponent
        }]
}];
