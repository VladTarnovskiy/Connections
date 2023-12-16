import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeopleResp, IPerson } from '../../models/people';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { IConversationsResp } from '../../models/conversations';
import * as PeopleActions from 'src/app/store/people/actions/people.action';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleURL = 'https://tasks.app.rs.school/angular/users';
  private conversationURL =
    'https://tasks.app.rs.school/angular/conversations/list';

  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private store: Store
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

      switchMap((peopleData) => {
        // if (state.peopleData) {
        return this.getConversations().pipe(
          map((conversationsData) => {
            const usersDataWithActiveConv: IPerson[] = [];
            peopleData.forEach((people: IPerson) => {
              const companionIDs = conversationsData.map(
                (conversation) => conversation.companionID
              );
              if (companionIDs.includes(people.uid)) {
                usersDataWithActiveConv.push({
                  ...people,
                  haveConversationID: true,
                });
              } else {
                usersDataWithActiveConv.push({
                  ...people,
                  haveConversationID: false,
                });
              }
            });
            return usersDataWithActiveConv;
          })
        );
      }),

      catchError((err) => {
        if (err) {
          this.toastService.handleError(err);
        }
        return of();
      })
    );
  }

  getConversations() {
    return this.http.get<IConversationsResp>(this.conversationURL).pipe(
      map((data: IConversationsResp) => {
        const conversationsData = data.Items.map((conversation) => {
          return {
            id: conversation.id.S,
            companionID: conversation.companionID.S,
          };
        });
        this.store.dispatch(
          PeopleActions.AddConversations({ conversationsData })
        );
        return conversationsData;
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
