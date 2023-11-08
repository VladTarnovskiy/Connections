import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { data } from 'src/data/data';
import { SortData } from '../../models/sort';
import {
  Card,
  CardItems,
  SearchCard,
  SearchCardsInfo,
} from '../../models/card.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private cardsURL =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=AIzaSyA5MqUDbAKPYlhA461fKYuYDDq67fNbXtw';

  private statisticsURL =
    'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA5MqUDbAKPYlhA461fKYuYDDq67fNbXtw&part=snippet,statistics';

  private sortDataSource = new BehaviorSubject<Card[]>([]);

  constructor(private http: HttpClient) {}

  sortData$ = this.sortDataSource.asObservable();

  getCard(id: number | string | null) {
    return this.sortData$.pipe(
      map((cardData: Card[]) => cardData.find((cardItem) => cardItem.id === id))
    );
  }

  getCards(searchValue: string) {
    const options = { params: new HttpParams().set('q', searchValue) };
    this.http
      .get<SearchCardsInfo>(this.cardsURL, options)
      .pipe(
        map((items) => items.items),
        catchError(this.handleError)
      )
      .subscribe((cards: SearchCard[]) => this.getSnippets(cards));
  }

  getSnippets(cards: SearchCard[]) {
    let ids = '';
    cards.forEach((item) => {
      ids += item.id.videoId + ',';
    });
    const options = { params: new HttpParams().set('id', ids.slice(0, -1)) };
    this.http
      .get<CardItems>(this.statisticsURL, options)
      .pipe(catchError(this.handleError))
      .subscribe((value: CardItems) => this.sortDataSource.next(value.items));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  sort(sortData: SortData) {
    const cards = this.sortDataSource.getValue();
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
      (a: Card, b: Card) =>
        Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
    );
    return sorted;
  }

  sortByViewDesc(cards: Card[]) {
    const sorted = JSON.parse(
      JSON.stringify(this.sortByViewAsc(cards).reverse())
    );
    return sorted;
  }

  sortByDateAsc(cards: Card[]) {
    const sorted = JSON.parse(JSON.stringify(cards)).sort(
      (a: Card, b: Card) =>
        Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
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
