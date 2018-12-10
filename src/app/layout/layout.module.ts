import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent, LoginComponent } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AboutComponent,
    PathNotFoundComponent,
    LoginComponent
  ]
})
export class LayoutModule { }
