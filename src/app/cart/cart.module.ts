import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent, CartItemComponent } from './components';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [CartListComponent]
})
export class CartModule { }
