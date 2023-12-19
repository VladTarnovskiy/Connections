import {
  IRespUserData,
  IUserDataStorage,
  UserDetails,
} from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import * as AuthActions from 'src/app/store/auth/actions/auth.action';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import * as PeopleActions from 'src/app/store/people/actions/people.action';
import * as GroupsActions from 'src/app/store/groups/actions/groups.action';
import { Store } from '@ngrx/store';

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
    public router: Router,
    private store: Store
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
        this.getInitialData();
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

  getInitialData() {
    const userDetails = localStorage.getItem('userDetails');

    if (userDetails) {
      this.checkLogin();
      this.isLoggedIn$.subscribe((loginData) => {
        if (loginData === true) {
          const authData = JSON.parse(userDetails) as IUserDataStorage;
          this.store.dispatch(AuthActions.AddUserData({ authData }));
          this.store.dispatch(ProfileActions.FetchProfile());
          this.store.dispatch(PeopleActions.FetchPeople());
          this.store.dispatch(ProfileActions.FetchProfile());
          this.store.dispatch(GroupsActions.FetchGroups());
        }
      });
    }
  }

  logout(): void {
    localStorage.removeItem('userDetails');
    this.isLoggedIn.next(false);
  }
}
