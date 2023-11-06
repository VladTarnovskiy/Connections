import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from 'src/data/data';
import { SortData } from '../../../types/sort';
import { Card } from '../../../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private sortDataSource = new Subject<Card[]>();

  sortData$ = this.sortDataSource.asObservable();

  setData() {
    this.sortDataSource.next(data.items);
  }

  sort(sortData: SortData) {
    const cards = data.items;
    const { sortBy, direction } = sortData;
    let sortedData = [];
    if (sortBy === 'view') {
      if (direction === 'asc') {
        sortedData = this.sortByViewAsc(cards);
      } else {
        sortedData = this.sortByViewDesc(cards);
      }
    } else if (direction === 'asc') {
      sortedData = this.sortByDateAsc(cards);
    } else {
      sortedData = this.sortByDateDesc(cards);
    }
    this.sortDataSource.next(sortedData);
  }

  sortByViewAsc(cards: Card[]) {
    const sorted = JSON.parse(JSON.stringify(cards)).sort(
      (a: Card, b: Card) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
    );
    return sorted;
  }

  sortByViewDesc(cards: Card[]) {
    const sorted = JSON.parse(
      JSON.stringify(this.sortByViewAsc(cards).reverse()),
    );
    return sorted;
  }

  sortByDateAsc(cards: Card[]) {
    const sorted = JSON.parse(JSON.stringify(cards)).sort(
      (a: Card, b: Card) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
    );
    return sorted;
  }

  sortByDateDesc(cards: Card[]) {
    return JSON.parse(JSON.stringify(this.sortByDateAsc(cards).reverse()));
  }

  filterByString(stringData: string) {
    function isIncludeString(value: Card) {
      return value.snippet.title.toLowerCase().includes(stringData);
    }
    const initCardsData: Card[] = JSON.parse(JSON.stringify(data.items));
    const filteredCardsData = initCardsData.filter(isIncludeString);
    this.sortDataSource.next(filteredCardsData);
  }
}
