import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Card[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((item) => {
      return item.snippet.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
