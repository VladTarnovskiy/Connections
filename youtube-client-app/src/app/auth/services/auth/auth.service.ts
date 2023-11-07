import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoginData, UserDetails } from '../../models/userDetails';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login(userDetails: UserDetails): Observable<boolean> {
    const login = userDetails.login ?? '';
    const details: LoginData = { login, token: 'faketoken' };
    localStorage.setItem('userDetails', JSON.stringify(details));

    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('userDetails');
    this.isLoggedIn = false;
  }
}
