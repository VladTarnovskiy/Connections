import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../../models/card.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Card[], searchText: string): Card[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter((item) =>
      item.snippet.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
  }
}
