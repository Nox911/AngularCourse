import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductsService } from './services';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  exports: [HighlightDirective]
})
export class SharedModule { }
