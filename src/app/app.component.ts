import { Component, ViewChild, OnInit, ElementRef, OnChanges, DoCheck } from '@angular/core';
import { CartService } from './cart/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') title: ElementRef;

  cartCount: Observable<number>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.title.nativeElement.textContent = 'Mini Shop';
    this.cartCount = this.cartService.totalCount;
  }
}
