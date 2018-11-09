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
      isAvailable: true
    },
    {
      name: 'New wave',
      description: 'Book about adventure',
      price: 5,
      category: Category.Detective,
      isAvailable: false
    },
    {
      name: 'Around the world. Part 2',
      description: 'Book about adventure',
      price: 7,
      category: Category.Adventure,
      isAvailable: true
    }
  ];

  getProducts(): ProductModel[] {
    return this.productList;
  }
}
