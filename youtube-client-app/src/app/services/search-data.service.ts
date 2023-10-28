import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { data } from 'src/data/data';
import { SortData } from '../types/sort';
import { Card } from '../models/card.model';
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByViewAsc,
  sortByViewDesc,
} from './sort';

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
        sortedData = sortByViewAsc(cards);
      } else {
        sortedData = sortByViewDesc(cards);
      }
    } else if (direction === 'asc') {
      sortedData = sortByDateAsc(cards);
    } else {
      sortedData = sortByDateDesc(cards);
    }
    this.sortDataSource.next(sortedData);
  }

  filterByString(stringData: string) {
    const initCardsData: Card[] = JSON.parse(JSON.stringify(data.items));
    const filteredCardsData = initCardsData.filter((item) => item.snippet.title.toLowerCase().includes(stringData.toLowerCase()));
    this.sortDataSource.next(filteredCardsData);
  }
}
