import { Injectable } from '@angular/core';
import { catchError, map, throwError, switchMap } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { CardsInfo, SearchCardsInfo } from '../../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private cardsURL =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video';

  private statisticsURL =
    'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics';

  constructor(private http: HttpClient) {}

  getCard(id: number | string | null) {
    const options = { params: new HttpParams().set('id', String(id)) };
    return this.http.get<CardsInfo>(this.statisticsURL, options).pipe(
      map((cardsInfo) => cardsInfo.items),
      map((cards) => cards[0]),
      catchError(this.obsHandleError)
    );
  }

  getCards(searchValue: string) {
    const searchQuery = { params: new HttpParams().set('q', searchValue) };
    return this.http.get<SearchCardsInfo>(this.cardsURL, searchQuery).pipe(
      map((items) => {
        let ids = '';
        items.items.forEach((item) => {
          ids += `${item.id.videoId},`;
        });
        const options = {
          params: new HttpParams().set('id', ids.slice(0, -1)),
        };
        return options;
      }),
      switchMap((httpOptions) =>
        this.http.get<CardsInfo>(this.statisticsURL, httpOptions)
      )
      // ,
      // catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return `An error occurred:', ${error.error}`;
    } else {
      return `Backend returned code ${error.status}, body was: , ${error.error} `;
    }
  }

  private obsHandleError(error: HttpErrorResponse) {
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
}
