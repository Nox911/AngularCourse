import { Injectable } from '@angular/core';
import { ProductModel } from '../../shared/models/product.model';

@Injectable()
export class CartService {
  cartList: ProductModel[] = [];

  addToCart(book: ProductModel): void {
    this.cartList.push(book);
    console.log(this.cartList);
  }

  getCartList(): ProductModel[] {
    return this.cartList;
  }

  cleanCart(): void {
    this.cartList = [];
  }
}
