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
  IConversationMessageToStore,
  IConversationResp,
} from '../../models/conversation';
import { Store } from '@ngrx/store';
import * as PeopleActions from 'src/app/store/people/actions/people.action';

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
    private router: Router,
    private store: Store
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
        tap(({ conversationID }) => {
          this.store.dispatch(
            PeopleActions.UpdatePeople({
              personID: companion,
              conversationID,
            })
          );
          this.store.dispatch(
            PeopleActions.AddConversation({
              companionID: companion,
              id: conversationID,
            })
          );
        }),
        tap(({ conversationID }) => {
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

  getConversation(conversationID: string, science?: string) {
    let options: { params: HttpParams };
    if (science) {
      options = {
        params: new HttpParams()
          .set('conversationID', conversationID)
          .set('since', science),
      };
    } else {
      options = {
        params: new HttpParams().set('conversationID', conversationID),
      };
    }
    return this.http
      .get<IConversationResp>(this.getConversationURL, options)
      .pipe(
        map((conversationResp) => {
          if (conversationResp) {
            const messageData = conversationResp.Items.map((message) => {
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

  sentMessage(regData: IConversationMessageToStore) {
    return this.http
      .post(this.sentMessageURL, {
        conversationID: regData.conversationID,
        message: regData.message,
      })
      .pipe(
        map(() => {
          const messageData = {
            conversationID: regData.conversationID,
            message: regData.message,
            authorID: regData.authorID,
            createdAt: String(Date.now()),
          };
          return messageData;
        }),
        catchError((err) => {
          if (err) {
            this.toastService.handleError(err);
          }
          return of();
        })
      );
  }

  deleteConversation(conversationID: string) {
    const options = {
      params: new HttpParams().set('conversationID', conversationID),
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
