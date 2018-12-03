import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringGeneratorFactory } from './services';

export const ConstantsService = new InjectionToken('title');
export const StringGenerator10 = new InjectionToken('StringGenerator10');
export const StringGenerator20 = new InjectionToken('StringGenerator20');


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: { app: 'Mini Shop', ver: '1.0' } },
    { provide: StringGenerator10, useFactory: StringGeneratorFactory(10) },
    { provide: StringGenerator20, useFactory: StringGeneratorFactory(20) },
  ],
  declarations: []
})
export class CoreModule { }
