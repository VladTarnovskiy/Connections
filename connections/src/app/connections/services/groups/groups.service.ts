import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IGroupsResp } from '../../models/groups';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private groupsURL = 'https://tasks.app.rs.school/angular/groups/list';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getGroups() {
    return this.http.get<IGroupsResp>(this.groupsURL).pipe(
      map((data: IGroupsResp) => {
        const groupsData = data.Items.map((group) => {
          return {
            name: group.name.S,
            id: group.id.S,
            createdAt: group.createdAt.S,
            createdBy: group.createdBy.S,
          };
        });
        return groupsData;
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
