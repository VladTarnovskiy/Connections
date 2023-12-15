import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { IProfile, IProfileResp } from '../models/profile';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profilerURL = 'https://tasks.app.rs.school/angular/profile';

  constructor(private http: HttpClient, private toastService: ToastService) {}

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
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  updateProfile(name: string) {
    return this.http.put(this.profilerURL, { name }).pipe(
      map(() => name),
      tap(() => this.toastService.addSuccessToast('Username updated')),
      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }
}
