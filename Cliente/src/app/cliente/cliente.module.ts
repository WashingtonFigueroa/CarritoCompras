import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, StoreComponent]
})
export class ClienteModule { }
