import {
  IRespUserData,
  IUserDataStorage,
  UserDetails,
} from './../models/registration';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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
  private logoutURL = 'https://tasks.app.rs.school/angular/logout';
  private checkAuthURL = 'https://tasks.app.rs.school/angular/profile';

  private isLoggedIn = new BehaviorSubject<boolean>(true);

  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    public router: Router,
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
    this.http.get(this.checkAuthURL).subscribe({
      next: () => {
        this.getInitialData();
        this.isLoggedIn.next(true);
        return of();
      },
      error: () => {
        this.isLoggedIn.next(false);
      },
    });
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
      tap(() => this.router.navigate(['auth/login'])),
      catchError((err) => {
        this.store.dispatch(
          ProfileActions.ChangeIsLoadingProfile({ isLoading: false })
        );
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }
}
