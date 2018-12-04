import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
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
