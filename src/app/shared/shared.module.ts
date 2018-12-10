import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective, IncreaseTextDirective } from './../shared/directives';
import { OrderByPipe } from './pipes/order-by.pipe';

const declarationsArray = [ HighlightDirective, IncreaseTextDirective, OrderByPipe ];

@NgModule({
  declarations: [declarationsArray],
  imports: [
    CommonModule
  ],
  exports: [declarationsArray]
})
export class SharedModule { }
