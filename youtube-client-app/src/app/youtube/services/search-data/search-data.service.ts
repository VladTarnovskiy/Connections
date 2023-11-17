import { Injectable } from '@angular/core';
import { catchError, map, throwError, switchMap, tap } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { CardsInfo, SearchCardsInfo } from '../../models/card.model';
import { Store } from '@ngrx/store';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';

@Injectable({
  providedIn: 'root',
})
export class SearchDataService {
  private cardsURL =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video';

  private statisticsURL =
    'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics';

  constructor(private http: HttpClient, private store: Store) {}

  getCard(id: number | string | null) {
    const options = { params: new HttpParams().set('id', String(id)) };
    return this.http.get<CardsInfo>(this.statisticsURL, options).pipe(
      map((cardsInfo) => cardsInfo.items),
      map((cards) => cards[0]),
      catchError(this.obsHandleError)
    );
  }

  getCards(searchValue: string, pageToken?: string) {
    let searchQuery = { params: new HttpParams().set('q', searchValue) };
    if (pageToken) {
      searchQuery = {
        params: new HttpParams()
          .set('q', searchValue)
          .set('pageToken', pageToken),
      };
    }
    return this.http.get<SearchCardsInfo>(this.cardsURL, searchQuery).pipe(
      tap((cardsInfo) =>
        this.store.dispatch(
          CardsActions.SetPagesInfo({
            pagesInfo: {
              nextPage: cardsInfo.nextPageToken,
              prevPage: cardsInfo.prevPageToken,
              searchValue,
            },
          })
        )
      ),
      map((cardsInfo) => {
        let ids = '';
        cardsInfo.items.forEach((item) => {
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
