import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGroupsResp } from '../../models/groups';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private groupsURL = 'https://tasks.app.rs.school/angular/groups/list';
  private createGroupURL = 'https://tasks.app.rs.school/angular/groups/create';

  constructor(private http: HttpClient, private toastService: ToastService) {}

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
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  createGroup(name: string) {
    return this.http.post(this.createGroupURL, { name }).pipe(
      tap(() => {
        this.toastService.addSuccessToast('Group created');
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
