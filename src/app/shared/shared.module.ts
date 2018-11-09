import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductsService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CartService,
    ProductsService
  ]
})
export class SharedModule { }
