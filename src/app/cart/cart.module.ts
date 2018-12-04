import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent, CartItemComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ],
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  exports: [CartListComponent]
})
export class CartModule { }
