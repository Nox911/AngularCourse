import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
