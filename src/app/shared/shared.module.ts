import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductsService } from './services';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HighlightDirective, IncreaseTextDirective } from './../shared/directives';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    IncreaseTextDirective,
    ContactUsComponent,
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
    ContactUsComponent,
    IncreaseTextDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
