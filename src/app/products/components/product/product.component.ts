import { Component } from '@angular/core';

import { Category, ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor (private cartService: CartService) { }

  product: ProductModel = {
    name: 'Around the world',
    description: 'Book about adventure',
    price: 5,
    category: Category.Adventure,
    isAvailable: true
  };

  onBuy(book: ProductModel) {
    console.log(`"${book.name}" is added to Cart`);
    this.cartService.addToCart(book);
  }
}
