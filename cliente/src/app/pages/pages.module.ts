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
        PrivilegioCreateComponent

    ],
    providers: [
        TipousuarioService,
        UsuarioService,
        PrivilegioService
    ]
})
export class PagesModule { }
