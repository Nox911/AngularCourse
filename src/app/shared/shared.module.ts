import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, ProductsService } from './services';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HighlightDirective, IncreaseTextDirective } from './../shared/directives';

@NgModule({
  declarations: [
    HighlightDirective,
    IncreaseTextDirective,
    ContactUsComponent
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
    IncreaseTextDirective
  ]
})
export class SharedModule { }
