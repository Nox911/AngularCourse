import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services';
import { ProductsService} from './../../../products/services/products.service';
import { ProductModel } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements DoCheck, OnInit {
  productCartList: ProductModel[];
  totalCartCount: Observable<number>;
  orderType = 'name';

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngOnInit() {
    this.totalCartCount = this.cartService.totalCount;
  }

  ngDoCheck() {
    this.productCartList = this.cartService.getCartList();
  }

  onRemoveItem(productId: string) {
    this.cartService.updateCartList(productId);
    this.productService.restoreProductCount(productId);
  }

  clearCart() {
    this.cartService.clearCart();
    this.productService.restoreAllProductCount();
  }

  changeOrderType(newOrderType: string): void {
    this.orderType = newOrderType;
  }
}
