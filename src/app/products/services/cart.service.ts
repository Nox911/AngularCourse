import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable()
export class CartService {
  cartList: ProductModel[] = [];

  addToCart(book: ProductModel): void {
    this.cartList.push(book);
  }

  getCartList(): ProductModel[] {
    return this.cartList;
  }

  cleanCart(): void {
    this.cartList = [];
  }
}
