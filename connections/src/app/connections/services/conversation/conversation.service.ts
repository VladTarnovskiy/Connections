import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { IConversationResp } from '../../models/conversation';

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
          // this.isLoggedIn.next(true);
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
      params: new HttpParams()
        .set('conversationID', String(conversationID))
        .set('since', Date.now()),
    };
    return this.http
      .get<{ conversationResp: IConversationResp }>(
        this.getConversationURL,
        options
      )
      .pipe(
        map(({ conversationResp }) => {
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

  sentMessage(conversationID: string) {
    console.log(conversationID);
    const options = {
      params: new HttpParams()
        .set('conversationID', String(conversationID))
        .set('since', Date.now()),
    };
    return this.http
      .get<{ conversationResp: IConversationResp }>(
        this.getConversationURL,
        options
      )
      .pipe(
        map(({ conversationResp }) => {
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
}
