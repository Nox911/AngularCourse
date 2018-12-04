import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductsService } from './services';
import { HighlightDirective, IncreaseTextDirective } from './../shared/directives';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    IncreaseTextDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  exports: [
    HighlightDirective,
    IncreaseTextDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
