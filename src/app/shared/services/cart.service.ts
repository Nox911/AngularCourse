import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';

@Injectable()
export class CartService {
  cartList: ProductModel[] = [];
  totalCount = 0;

  addToCart(product: ProductModel): void {
    if (product.cartCount) {
      this.cartList.forEach(item => item.id === product.id ? item.cartCount++ : item);
    } else {
      this.cartList.push(product);
      product.cartCount++;
    }
    this.totalCount++;
  }

  getCartList(): ProductModel[] {
    return this.cartList;
  }

  getTotalCount() {
    return this.totalCount;
  }

  updateCartList(productId: string): void {
    this.cartList = this.cartList.filter(item => {
      if (item['id'] !== productId) {
        return true;
      } else {
        this.totalCount = this.totalCount - item['cartCount'];
        return false;
      }
    });
  }

  clearCart() {
    this.cartList = [];
    this.totalCount = 0;
  }
}
