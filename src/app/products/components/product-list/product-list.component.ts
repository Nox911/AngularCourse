import { Component, OnInit } from '@angular/core';
import { CartService, ProductsService } from '../../../shared/services';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: ProductModel[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
  }

  onBuy(book: ProductModel) {
    this.cartService.addToCart(book);
  }
}
