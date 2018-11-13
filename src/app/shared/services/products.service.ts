import { Injectable } from '@angular/core';
import { ProductModel, Category } from '../../shared/models/product.model';

@Injectable()
export class ProductsService {
  productList: ProductModel[] = [
    {
      name: 'Tom and Jerry',
      description: 'Book about pets',
      price: 4,
      category: Category.Fantasy,
      isAvailable: true,
      availableCount: 3,
      cartCount: 0,
      id: '1'
    },
    {
      name: 'New wave',
      description: 'Book about adventure',
      price: 5,
      category: Category.Detective,
      isAvailable: true,
      availableCount: 2,
      cartCount: 0,
      id: '2'
    },
    {
      name: 'Around the world. Part 2',
      price: 7,
      category: Category.Adventure,
      isAvailable: true,
      availableCount: 5,
      cartCount: 0,
      id: '3'
    }
  ];

  getProducts(): ProductModel[] {
    return this.productList;
  }

  updateProductsCount(productId: string) {
    return this.productList.map(item => {
      if (item.id === productId) {
        item.availableCount--;
      }
      item.isAvailable = !!item.availableCount;

      return item;
    });
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
}
