import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../../shared/models';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: ProductModel;
  reviewVisible = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(params.get('productId'))))
      .subscribe(
        product => this.product = {...product}
    );
  }

  onGoBack() {
    this.router.navigate(['/catalog', { outlets: { reviews: null } }]);
  }

  onShowReview() {
    this.reviewVisible = true;
    this.router.navigate([{ outlets: { reviews: ['reviews', this.product.id] } }]);
  }

  onHideReview() {
    this.reviewVisible = false;
    this.router.navigate([{ outlets: { reviews: null } }]);
  }

  ngOnDestroy() {
    console.log('destroy');
    this.router.navigate([{ outlets: { reviews: null } }]);
  }

}
