import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { ConstantsService, StringGenerator10 } from './core/core.module';
import { ConfigOptionsService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') title: ElementRef;

  ngOnInit() {
    this.title.nativeElement.textContent = 'Mini Shop';
  }
}
