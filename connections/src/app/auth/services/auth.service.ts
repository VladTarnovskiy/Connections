import { UserDetails } from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerURL = 'https://tasks.app.rs.school/angular/registration';
  private loginURL = 'https://tasks.app.rs.school/angular/login';

  isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // getCard(id: number | string | null) {
  //   const options = { params: new HttpParams().set('id', String(id)) };
  //   return this.http.get<CardsInfo>(this.statisticsURL, options).pipe(
  //     map((cardsInfo) => cardsInfo.items),
  //     map((cards) => cards[0]),
  //     catchError(this.obsHandleError)
  //   );

  login(userDetails: Omit<UserDetails, 'name'>) {
    // const login = userDetails.email ?? '';
    // const details: IRespUserData = { login, token: 'faketoken' };
    // localStorage.setItem('userDetails', JSON.stringify(details));

    // return of(true).pipe(
    //   delay(1000),
    //   tap(() => {
    //     this.isLoggedIn.next(true);
    //   })
    // );
    return this.http.post(this.loginURL, userDetails).pipe(
      map((userData) => {
        localStorage.setItem(
          'userDetails',
          JSON.stringify({ ...userData, email: userDetails.email })
        );
        return userData;
      })
      // catchError(() => this.handleError())
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
    return this.http.post(this.registerURL, userDetails).pipe(
      tap(() =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User registered',
        })
      )
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

  handleError(err: HttpErrorResponse) {
    // if (error.status === 0) {
    //   return `An error occurred:', ${error.error}`;
    // }
    this.messageService.add({
      severity: 'error',
      summary: err.error.type,
      detail: err.error.message,
    });
    // return `Backend returned code ${err.status}, body was: , ${err.error} `;
  }
}
