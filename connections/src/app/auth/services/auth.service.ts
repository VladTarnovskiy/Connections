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
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerURL = 'https://tasks.app.rs.school/angular/registration';
  private loginURL = 'https://tasks.app.rs.school/angular/login';
  private logoutURL = 'https://tasks.app.rs.school/angular/logout';

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();
  isNotFoundPage = false;

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private profileService: ProfileService,
    public router: Router,
    private location: Location,
    private store: Store
  ) {}

  login(userDetails: Omit<UserDetails, 'name'>) {
    return this.http.post<IRespUserData>(this.loginURL, userDetails).pipe(
      map((userData) => {
        localStorage.setItem(
          'userDetailsConnections',
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
          this.store.dispatch(
            AuthActions.ChangeAuthLoginIsLoading({
              isLoadingLogin: false,
            })
          );
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
          this.store.dispatch(
            AuthActions.ChangeAuthRegisterIsLoading({
              isLoadingRegister: false,
            })
          );
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  checkLogin() {
    this.profileService.getProfile().subscribe(() => {
      this.isLoggedIn.next(true);
      this.getInitialData();
      if (!this.isNotFoundPage) {
        this.location.back();
      }
    });
  }

  checkNotFoundPage(isNotFoundPage: boolean) {
    this.isNotFoundPage = isNotFoundPage;
  }

  getInitialData() {
    const userDetails = localStorage.getItem('userDetailsConnections');

    if (userDetails) {
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

  logout() {
    return this.http.delete(this.logoutURL).pipe(
      tap(() => {
        localStorage.removeItem('userDetailsConnections');
        localStorage.removeItem('conversationNameConnections');
        this.isLoggedIn.next(false);
        this.toastService.addSuccessToast('User logout');
      }),
      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }
}
