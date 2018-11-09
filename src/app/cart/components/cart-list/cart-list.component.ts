import { Component, DoCheck } from '@angular/core';
import { CartService } from '../../../shared/services';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements DoCheck {

    productCartList: ProductModel[];

    constructor(private cartService: CartService) { }

    ngDoCheck() {
      this.productCartList = this.cartService.getCartList();
    }

    clearCart(): void {
      this.cartService.cleanCart();
    }
}
