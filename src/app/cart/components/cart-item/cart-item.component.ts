import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem: ProductModel;
  @Output() removeItem = new EventEmitter();

  removeCartItem(productId: string) {
    this.removeItem.emit(productId);
  }
}
