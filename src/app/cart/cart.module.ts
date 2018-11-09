import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent, CartItemComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartListComponent, CartItemComponent]
})
export class CartModule { }
