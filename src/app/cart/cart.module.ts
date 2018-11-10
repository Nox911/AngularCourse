import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartListComponent, CartItemComponent],
  exports: [CartListComponent]
})
export class CartModule { }
