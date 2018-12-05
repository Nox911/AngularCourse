import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { ProductsService } from './../../services/products.service';
import { ProductModel } from './../../../shared/models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  productReview = '';

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
        product => this.productReview = product.review ? product.review : 'No review!'
    );
  }

}
