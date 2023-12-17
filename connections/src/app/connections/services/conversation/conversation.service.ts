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
export class ConversationService {
  private createConversationURL =
    'https://tasks.app.rs.school/angular/conversations/create';
  private getConversationURL =
    'https://tasks.app.rs.school/angular/conversations/read';
  private sentMessageURL =
    'https://tasks.app.rs.school/angular/conversations/append';
  private deleteConversationURL =
    'https://tasks.app.rs.school/angular/conversations/delete';

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router
  ) {}

  createConversation(companion: string) {
    return this.http
      .post<{ conversationID: string }>(this.createConversationURL, {
        companion,
      })
      .pipe(
        map((conversationID) => {
          return conversationID;
        }),
        tap((conversationID) => {
          this.router.navigate([`/conversation/${conversationID}`]);
        }),
        tap(() => {
          this.toastService.addSuccessToast('Conversation created');
        }),
        catchError((err: HttpErrorResponse) => {
          if (err) {
            this.toastService.handleError(err);
          }
          return of();
        })
      );
  }

  getConversation(conversationID: string) {
    console.log(conversationID);
    const options = {
      params: new HttpParams().set('conversationID', conversationID),
      // .set('since', Date.now()),
    };
    return this.http
      .get<IConversationResp>(this.getConversationURL, options)
      .pipe(
        map((conversationResp) => {
          console.log(conversationResp);
          if (conversationResp) {
            const messageData = conversationResp.Items.map((message) => {
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
        conversationID: regData.conversationID,
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

  deleteConversation(conversationID: string) {
    console.log(conversationID);
    const options = {
      params: new HttpParams().set('conversationID', conversationID),
      // .set('since', Date.now()),
    };
    return this.http.delete(this.deleteConversationURL, options).pipe(
      tap(() => {
        this.router.navigate(['']);
      }),
      tap(() => {
        this.toastService.addSuccessToast('Conversation deleted');
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
