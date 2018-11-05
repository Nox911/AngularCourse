import { Component, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {
  productCartList: ProductModel[];

  constructor(private cartService: CartService) { }

  ngDoCheck() {
    this.productCartList = this.cartService.getCartList();
  }

  clearCart(): void {
    this.cartService.cleanCart();
  }
}
