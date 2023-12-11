import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, tap } from 'rxjs';
import { IProfile, IProfileResp } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilerURL = 'https://tasks.app.rs.school/angular/profile';

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

  getProfile() {
    return this.http.get<IProfileResp>(this.profilerURL).pipe(
      map((data: IProfileResp) => {
        const userData: IProfile = {
          name: data.name.S,
          email: data.email.S,
          uid: data.uid.S,
          createdAt: data.createdAt.S,
        };
        return userData;
      })
      // catchError(() => this.handleError())
    );
  }

  updateProfile(name: string) {
    return this.http
      .put(this.profilerURL, { name })
      .pipe
      // map((data: IProfileResp) => {
      //   const userData: IProfile = {
      //     name: data.name.S,
      //     email: data.email.S,
      //     uid: data.uid.S,
      //     createdAt: data.createdAt.S,
      //   };
      //   return userData;
      // })
      // catchError(() => this.handleError())
      ();
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
