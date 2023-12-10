import { IRegistration, UserDetails } from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
// import { tap, delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerURL = 'https://tasks.app.rs.school/angular/registration';
  private loginURL = 'https://tasks.app.rs.school/angular/login';

  isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  // getCard(id: number | string | null) {
  //   const options = { params: new HttpParams().set('id', String(id)) };
  //   return this.http.get<CardsInfo>(this.statisticsURL, options).pipe(
  //     map((cardsInfo) => cardsInfo.items),
  //     map((cards) => cards[0]),
  //     catchError(this.obsHandleError)
  //   );

  login(userDetails: Omit<UserDetails, 'name'>) {
    const login = userDetails.email ?? '';
    const details: IRegistration = { login, token: 'faketoken' };
    localStorage.setItem('userDetails', JSON.stringify(details));

    // return of(true).pipe(
    //   delay(1000),
    //   tap(() => {
    //     this.isLoggedIn.next(true);
    //   })
    // );
    return this.http.get(this.loginURL).pipe(
      tap((info) => console.log(info))
      // map((cardsInfo) => cardsInfo)
      // catchError(this.handleError)
    );
  }

  register(userDetails: UserDetails) {
    // const login = userDetails.email ?? '';
    // const details: IRegistration = { login, token: 'faketoken' };
    // localStorage.setItem('userDetails', JSON.stringify(details));

    // return of(true).pipe(
    //   delay(1000),
    //   tap(() => {
    //     this.isLoggedIn.next(true);
    //   })
    // );
    return this.http.get(this.registerURL).pipe(
      tap((info) => console.log(info)),
      map((cardsInfo) => cardsInfo)
      // catchError(this.handleError)
    );
  }

  // login(userDetails: UserDetails): Observable<boolean> {
  //   const login = userDetails.email ?? '';
  //   const details: IRegistration = { login, token: 'faketoken' };
  //   localStorage.setItem('userDetails', JSON.stringify(details));

  //   return of(true).pipe(
  //     delay(1000),
  //     tap(() => {
  //       this.isLoggedIn.next(true);
  //     })
  //   );
  // }

  logout(): void {
    localStorage.removeItem('userDetails');
    this.isLoggedIn.next(false);
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return `An error occurred:', ${error.error}`;
    }
    return `Backend returned code ${error.status}, body was: , ${error.error} `;
  }
}
