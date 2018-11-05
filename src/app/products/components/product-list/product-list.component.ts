import { Component, OnInit } from '@angular/core';
import { CartService, ProductsService } from '../../services';
import { ProductModel } from '../../models/product.model';

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

  onBuy(book: ProductModel): void {
    console.log(`"${book.name}" is added to Cart`);
    this.cartService.addToCart(book);
  }
}
