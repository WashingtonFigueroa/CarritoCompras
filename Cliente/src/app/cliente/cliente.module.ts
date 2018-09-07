import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ClienteModule { }
