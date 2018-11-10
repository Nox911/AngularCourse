import { Component, Output, EventEmitter, Input } from '@angular/core';

import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: ProductModel[];
  @Output() bookedProduct = new EventEmitter();

  onBuy(book: ProductModel) {
    this.bookedProduct.emit(book);
  }
}
