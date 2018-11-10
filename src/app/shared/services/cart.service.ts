import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';

@Injectable()
export class CartService {
  cartList: ProductModel[] = [];

  addToCart(book: ProductModel): void {
    if (book.cartCount) {
      this.cartList.forEach(item => item.id === book.id ? item.cartCount++ : item);
    } else {
      book.cartCount++;
      this.cartList.push(book);
    }
  }

  getCartList(): ProductModel[] {
    return this.cartList;
  }

  cleanCart(): void {
    this.cartList = [];
  }

  updateCartList(productId: string): void {
    this.cartList = this.cartList.filter(item => {

      return item['id'] !== productId;
    });
  }
}
