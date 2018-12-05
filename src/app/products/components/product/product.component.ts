import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  @Input() product: ProductModel[];
  @Output() bookedProduct = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  onBuy(book: ProductModel) {
    this.bookedProduct.emit(book);
  }

  onModified(productId) {
    this.router.navigate(['/products', productId]);
  }
}
