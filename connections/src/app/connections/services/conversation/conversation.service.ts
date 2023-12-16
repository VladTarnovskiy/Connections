import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private createConversationURL =
    'https://tasks.app.rs.school/angular/conversations/create';
  private getConversationURL =
    'https://tasks.app.rs.school/angular/conversations/read?conversationID=46f6aq96dzs&since=1699833375896';

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
          this.toastService.addSuccessToast('Chat created');
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

  getConversation(companion: string) {
    return this.http
      .post<{ conversationID: string }>(this.createConversationURL, {
        companion,
      })
      .pipe(
        map((conversationID) => {
          return conversationID;
        }),
        // tap(() => {
        //   this.toastService.addSuccessToast('Chat created');
        // }),
        // tap(() => {
        //   this.router.navigate(['/']);
        // }),
        catchError((err) => {
          if (err) {
            this.toastService.handleError(err);
          }
          return of();
        })
      );
  }
}
