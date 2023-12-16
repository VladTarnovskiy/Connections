import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private createConversationURL =
    'https://tasks.app.rs.school/angular/conversations/create';

  constructor(private http: HttpClient, private toastService: ToastService) {}

  createConversation(companion: string) {
    return this.http
      .post<{ conversationID: string }>(this.createConversationURL, {
        companion,
      })
      .pipe(
        map((conversationID) => {
          return conversationID;
        }),
        tap(() => {
          this.toastService.addSuccessToast('Chat created');
          // this.isLoggedIn.next(true);
        }),
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
