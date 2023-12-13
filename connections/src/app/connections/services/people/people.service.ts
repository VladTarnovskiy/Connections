import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IPeopleResp } from '../../models/people';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleURL = 'https://tasks.app.rs.school/angular/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getPeople() {
    return this.http.get<IPeopleResp>(this.peopleURL).pipe(
      map((data: IPeopleResp) => {
        const peopleData = data.Items.map((person) => {
          return {
            name: person.name.S,
            uid: person.uid.S,
          };
        });
        return peopleData;
      }),
      catchError((err) => {
        if (err) {
          this.handleError(err);
        }
        return of();
      })
    );
  }

  // updateProfile(name: string) {
  //   return this.http.put(this.profilerURL, { name }).pipe(
  //     map(() => name),
  //     tap(() =>
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: 'Username updated',
  //       })
  //     ),
  //     catchError((err) => {
  //       if (err) {
  //         this.handleError(err);
  //       }
  //       return of();
  //     })
  //   );
  // }

  handleError(err: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: err.error.type,
      detail: err.error.message,
    });
  }
}
