import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services';
import { ProductModel } from '../../../shared/models/product.model';
import { ProductsService } from './../../services/products.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Observable<ProductModel[]>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

  onBuy(product: ProductModel) {
    console.log('close');
    this.productList = this.productList
      .pipe(
        switchMap(() => {
          return this.productsService.updateProductsCount(product);
        })
      );
    // this.cartService.addToCart(product);
  }
}
