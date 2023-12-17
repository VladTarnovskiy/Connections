import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import {
  IConversationResp,
  IReqConversationMessage,
} from '../../models/conversation';

@Injectable({
  providedIn: 'root',
})
export class GroupDialogService {
  private createGroupDialogURL =
    'https://tasks.app.rs.school/angular/groups/create';
  private getGroupDialogURL = 'https://tasks.app.rs.school/angular/groups/read';
  private sentMessageURL = 'https://tasks.app.rs.school/angular/groups/append';
  private deleteGroupDialogURL =
    'https://tasks.app.rs.school/angular/groups/delete';

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router
  ) {}

  // createConversation(companion: string) {
  //   return this.http
  //     .post<{ groupID: string }>(this.createGroupDialogURL, {
  //       companion,
  //     })
  //     .pipe(
  //       map((groupID) => {
  //         return groupID;
  //       }),
  //       tap((groupID) => {
  //         this.router.navigate([`/group/${groupID}`]);
  //       }),
  //       tap(() => {
  //         this.toastService.addSuccessToast('Group dialog created');
  //       }),
  //       catchError((err: HttpErrorResponse) => {
  //         if (err) {
  //           this.toastService.handleError(err);
  //         }
  //         return of();
  //       })
  //     );
  // }

  createGroup(name: string) {
    return this.http
      .post<{ groupID: string }>(this.createGroupDialogURL, { name })
      .pipe(
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

  getGroup(groupID: string) {
    console.log(groupID);
    const options = {
      params: new HttpParams().set('conversationID', groupID),
      // .set('since', Date.now()),
    };
    return this.http
      .get<IConversationResp>(this.getGroupDialogURL, options)
      .pipe(
        map((groupResp) => {
          console.log(groupResp);
          if (groupResp) {
            const messageData = groupResp.Items.map((message) => {
              return {
                authorID: message.authorID.S,
                message: message.message.S,
                createdAt: message.createdAt.S,
              };
            });
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

  sentMessage(regData: IReqConversationMessage) {
    console.log(regData);
    return this.http
      .post(this.sentMessageURL, {
        groupID: regData.conversationID,
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

  // deleteGroupDialog(groupID: string) {
  //   console.log(groupID);
  //   const options = {
  //     params: new HttpParams().set('groupID', groupID),
  //     // .set('since', Date.now()),
  //   };
  //   return this.http.delete(this.deleteGroupDialogURL, options).pipe(
  //     tap(() => {
  //       this.router.navigate(['']);
  //     }),
  //     tap(() => {
  //       this.toastService.addSuccessToast('Group deleted');
  //     }),
  //     catchError((err) => {
  //       if (err) {
  //         this.toastService.handleError(err);
  //       }
  //       return of();
  //     })
  //   );
  // }
}
