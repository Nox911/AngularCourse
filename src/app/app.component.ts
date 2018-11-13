import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

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
