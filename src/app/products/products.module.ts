import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';
import { ProductsService } from '../shared/services';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
