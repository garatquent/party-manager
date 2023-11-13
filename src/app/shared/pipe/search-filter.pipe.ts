import { Pipe, PipeTransform } from '@angular/core';
import { IEvents } from '../models/i-events';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(
    value: any,
    search?: any
  ): any {
    if (!value) return null;
    if (!search) return value;
    search = search.toLowerCase();
    return value.filter(function(item: any) {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(search);
    })


  }

}
