import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductComponent, ProductListComponent } from './products/components/';
import { CartService } from './cart/services/cart.service';
import { ProductsService } from './products/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
