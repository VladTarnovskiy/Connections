import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { IConversationResp } from '../../models/conversation';
import { IReqGroupDialogMessage } from '../../models/groups';

@Injectable({
  providedIn: 'root',
})
export class GroupDialogService {
  private getGroupDialogURL = 'https://tasks.app.rs.school/angular/groups/read';
  private sentMessageURL = 'https://tasks.app.rs.school/angular/groups/append';
  private deleteGroupDialogURL =
    'https://tasks.app.rs.school/angular/groups/delete';

  constructor(private http: HttpClient, private toastService: ToastService) {}

  deleteGroup(groupID: string) {
    const options = {
      params: new HttpParams().set('groupID', groupID),
    };
    return this.http.delete(this.deleteGroupDialogURL, options).pipe(
      tap(() => {
        this.toastService.addSuccessToast('Group deleted');
      }),
      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  getGroup(groupID: string, science?: string) {
    let options: { params: HttpParams };
    if (science) {
      options = {
        params: new HttpParams().set('groupID', groupID).set('since', science),
      };
    } else {
      options = {
        params: new HttpParams().set('groupID', groupID),
      };
    }

    return this.http
      .get<IConversationResp>(this.getGroupDialogURL, options)
      .pipe(
        map((groupResp) => {
          if (groupResp) {
            const messageData = groupResp.Items.map((message) => {
              return {
                authorID: message.authorID.S,
                message: message.message.S,
                createdAt: message.createdAt.S,
              };
            });
            messageData.sort(
              (messageA, messageB) =>
                Number(messageA.createdAt) - Number(messageB.createdAt)
            );
            return messageData;
          } else {
            return [];
          }
        }),
        catchError((err) => {
          if (err) {
            this.toastService.handleError(err);
          }
          return of();
        })
      );
  }

  sentMessage(regData: IReqGroupDialogMessage) {
    return this.http
      .post(this.sentMessageURL, {
        groupID: regData.groupID,
        message: regData.message,
      })
      .pipe(
        catchError((err) => {
          if (err) {
            this.toastService.handleError(err);
          }
          return of();
        })
      );
  }
}
