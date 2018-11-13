import { Component, DoCheck } from '@angular/core';
import { CartService, ProductsService } from '../../../shared/services';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements DoCheck {

  productCartList: ProductModel[];
  totalCartCount;

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngDoCheck() {
    this.productCartList = this.cartService.getCartList();
    this.totalCartCount = this.cartService.totalCount;
  }

  onRemoveItem(productId: string) {
    this.cartService.updateCartList(productId);
    this.productService.restoreProductCount(productId);
  }

  clearCart() {
    this.cartService.clearCart();
    this.productService.restoreAllProductCount();
  }
}
