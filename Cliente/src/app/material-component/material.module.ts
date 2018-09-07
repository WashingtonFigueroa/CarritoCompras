import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule} from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
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
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TipousuarioComponent } from './tipousuario/tipousuario.component';
import { TipousuarioEditComponent } from './tipousuario/tipousuario-edit/tipousuario-edit.component';
import { TipousuarioCreateComponent } from './tipousuario/tipousuario-create/tipousuario-create.component';
import { PrivilegioComponent } from './privilegio/privilegio.component';
import { PrivilegioIndexComponent } from './privilegio/privilegio-index/privilegio-index.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioIndexComponent } from './usuario/usuario-index/usuario-index.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaIndexComponent } from './categoria/categoria-index/categoria-index.component';
import { CategoriaEditComponent } from './categoria/categoria-edit/categoria-edit.component';
import { CategoriaCreateComponent } from './categoria/categoria-create/categoria-create.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoIndexComponent } from './producto/producto-index/producto-index.component';
import { ProductoEditComponent } from './producto/producto-edit/producto-edit.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import {PrivilegioService} from './privilegio/privilegio.service';
import {UsuarioService} from './usuario/usuario.service';
import {TipousuarioService} from './tipousuario/tipousuario.service';
import {CategoriaService} from './categoria/categoria.service';
import {ProductoService} from './producto/producto.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [
      PrivilegioService,
      UsuarioService,
      TipousuarioService,
      CategoriaService,
      ProductoService
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    TipousuarioComponent,
    TipousuarioEditComponent,
    TipousuarioCreateComponent,
    PrivilegioComponent,
    PrivilegioIndexComponent,
    UsuarioComponent,
    UsuarioIndexComponent,
    UsuarioEditComponent,
    UsuarioCreateComponent,
    CategoriaComponent,
    CategoriaIndexComponent,
    CategoriaEditComponent,
    CategoriaCreateComponent,
    ProductoComponent,
    ProductoIndexComponent,
    ProductoEditComponent,
    ProductoCreateComponent
  ]
})

export class MaterialComponentsModule {}
