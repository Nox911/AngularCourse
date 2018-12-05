import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';
import { CartModule } from './../cart.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList: ProductModel[] = [];
  localTotalCount = 0;
  totalCount = new BehaviorSubject(0);

  addToCart(product: ProductModel): void {
    if (product.cartCount) {
      this.cartList.forEach(item => item.id === product.id ? item.cartCount++ : item);
    } else {
      this.cartList.push(product);
      product.cartCount++;
    }
    this.localTotalCount++;
    this.totalCount.next(this.localTotalCount);
  }

  getCartList(): ProductModel[] {
    return [].concat(this.cartList);
  }

  getTotalCount() {
    return this.totalCount;
  }

  updateCartList(productId: string): void {
    this.cartList = this.cartList.filter(item => {
      if (item['id'] !== productId) {
        return true;
      } else {
        this.localTotalCount = this.localTotalCount - item['cartCount'];
        this.totalCount.next(this.localTotalCount);
        return false;
      }
    });
  }

  clearCart() {
    this.cartList = [];
    this.localTotalCount = 0;
    this.totalCount.next(this.localTotalCount);
  }
}
