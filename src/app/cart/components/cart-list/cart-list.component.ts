import { Component, DoCheck } from '@angular/core';
import { CartService, ProductsService } from '../../../shared/services';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements DoCheck {

  productCartList: ProductModel[];

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngDoCheck() {
    this.productCartList = this.cartService.getCartList();
  }

  clearCart(): void {
    this.cartService.cleanCart();
  }

  onRemoveItem(productId: string) {
    this.productService.restoreAvailableCount(productId);
    this.cartService.updateCartList(productId);
  }
}
