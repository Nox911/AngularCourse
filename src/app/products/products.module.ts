import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent, ProductFormComponent } from './components';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ReviewsComponent } from './components/reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent,
    ReviewsComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
