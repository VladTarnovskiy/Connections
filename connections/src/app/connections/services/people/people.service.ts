import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeopleResp, IPerson } from '../../models/people';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { IConversationsResp } from '../../models/conversations';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleURL = 'https://tasks.app.rs.school/angular/users';
  private conversationURL =
    'https://tasks.app.rs.school/angular/conversations/list';

  constructor(private http: HttpClient, private toastService: ToastService) {}

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
            // const peopleData = structuredClone(peopleData);
            const usersDataWithActiveConv: IPerson[] = peopleData.map(
              (people: IPerson) => {
                // for (let i = 0; i < conversationsData.length; i++) {
                //   if (people.uid === conversationsData[i].companionID) {
                //     return { ...people, haveConversationID: true };
                //   } else {
                //     return { ...people, haveConversationID: false };
                //   }
                // }
                conversationsData.forEach((conversation) => {
                  if (people.uid === conversation.companionID) {
                    return { ...people, haveConversationID: true };
                  } else {
                    return { ...people, haveConversationID: false };
                  }
                });
                return { ...people, haveConversationID: false };
              }
            );
            return usersDataWithActiveConv;
            // console.log(usersDataWithActiveConv);
          })
        );

        // }
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
}
