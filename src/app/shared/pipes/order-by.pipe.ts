import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../../shared/models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: ProductModel[], args?): ProductModel[] {
    return value.sort((currentValue, nextValue) => {
      if ( args.sortType === 'name' ) {
        return currentValue[args.sortType].localeCompare(nextValue[args.sortType]);
      }
      if ( args.sortType === 'price' ) {
        return currentValue[args.sortType] * currentValue.cartCount - nextValue[args.sortType] * nextValue.cartCount;
      }

      return currentValue[args.sortType] - nextValue[args.sortType];
    });
  }
}
