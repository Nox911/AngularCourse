import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProductModel, Category } from '../../shared/models/product.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:3000/books';
  productList: ProductModel[];

  constructor (private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http
    .get<ProductModel[]>(this.baseUrl)
    .pipe(
      map((books: ProductModel[]) => this.parseData(books)),
      tap((books) => this.productList = books));
  }

  updateProductsCount(product: ProductModel): Observable<ProductModel[]> {
    const url = `${this.baseUrl}/${product.id}`;
    const body = '';
    const options = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
    .post<ProductModel[]>(url, body, options)
    .pipe(
      // tap((books) => console.log(books))
    );
      // map((books: ProductModel[]) => this.parseData(books)),
      // tap((books) => this.productList = books));

    // return Promise.resolve(
    //   this.productList.map(item => {
    //     if (item.id === productId) {
    //       item.availableCount--;
    //     }
    //     item.isAvailable = !!item.availableCount;

    //     return item;
    //   })
    // );
  }

  restoreProductCount(productId: string) {
    return this.productList.map(item => {
      if (item.id === productId) {
        item.availableCount = item.availableCount + item.cartCount;
        item.cartCount = 0;
      }
      item.isAvailable = !!item.availableCount;

      return item;
    });
  }

  restoreAllProductCount() {
    return this.productList.map(item => {
      item.availableCount = item.availableCount + item.cartCount;
      item.cartCount = 0;
      item.isAvailable = !!item.availableCount;

      return item;
    });
  }

  getProduct(productId) {
    return this.productList.filter(product => product.id === productId);
  }

  private parseData(books: ProductModel[]) {
    return books.map((book: ProductModel) => {
      const data = {
        price: +book.price,
        isAvailable: !!book.isAvailable,
        lastModified: Date.now() - book.lastModified,
        cartCount: +book.cartCount,
        availableCount: +book.availableCount,
        category: book.category
      };
      return {...book, ...data};
    });
  }

}
