import { IRespUserData, UserDetails } from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

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
    private messageService: MessageService,
    private profileService: ProfileService,
    public router: Router
  ) {}

  login(userDetails: Omit<UserDetails, 'name'>) {
    return this.http.post<IRespUserData>(this.loginURL, userDetails).pipe(
      map((userData) => {
        localStorage.setItem(
          'userDetails',
          JSON.stringify({ ...userData, email: userDetails.email })
        );
        return { ...userData, email: userDetails.email };
      }),
      tap(() =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User login',
        })
      ),
      tap(() => {
        this.isLoggedIn.next(true);
      }),
      tap(() => {
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1500);
      }),
      catchError((err) => {
        if (err) {
          this.handleError(err);
        }
        return of();
      })
    );
  }

  register(userDetails: UserDetails) {
    return this.http.post(this.registerURL, userDetails).pipe(
      tap(() =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User registered',
        })
      ),
      tap(() =>
        setTimeout(() => {
          this.router.navigate(['auth/login']);
        }, 1000)
      ),
      catchError((err) => {
        if (err) {
          this.handleError(err);
        }
        return of();
      })
    );
  }

  checkLogin() {
    this.profileService.getProfile().subscribe(() => {
      this.isLoggedIn.next(true);
    });
  }

  logout(): void {
    localStorage.removeItem('userDetails');
    this.isLoggedIn.next(false);
  }

  handleError(err: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: err.error.type,
      detail: err.error.message,
    });
  }
}
