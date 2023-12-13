import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, map, of, tap } from 'rxjs';
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
      }),
      catchError((err) => {
        if (err) {
          this.handleError(err);
        }
        return of();
      })
    );
  }

  updateProfile(name: string) {
    return this.http.put(this.profilerURL, { name }).pipe(
      map(() => name),
      tap(() =>
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Username updated',
        })
      ),
      catchError((err) => {
        if (err) {
          this.handleError(err);
        }
        return of();
      })
    );
  }

  handleError(err: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: err.error.type,
      detail: err.error.message,
    });
  }
}
