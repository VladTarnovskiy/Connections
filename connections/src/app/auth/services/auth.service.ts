import { IRespUserData, UserDetails } from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

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
    private toastService: ToastService,
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
      tap(() => {
        this.toastService.addSuccessToast('User login');
        this.isLoggedIn.next(true);
      }),
      tap(() => {
        this.router.navigate(['/']);
      }),
      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  register(userDetails: UserDetails) {
    return this.http.post(this.registerURL, userDetails).pipe(
      tap(() => this.toastService.addSuccessToast('User registered')),
      tap(() => this.router.navigate(['auth/login'])),
      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
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
}
