import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, tap, switchMap } from 'rxjs';
import * as PeopleActions from '../actions/people.action';
import { PeopleService } from 'src/app/connections/services/people/people.service';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  fetchPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.FetchPeople),
      switchMap(() =>
        this.peopleService.getPeople().pipe(
          map((peopleData) => PeopleActions.AddPeople({ peopleData }))
          // switchMap(() =>
          //   this.peopleService.getConversations().pipe(
          //     tap((data) => console.log(data)),
          //     map((conversationsData) =>
          //       PeopleActions.AddConversations({ conversationsData })
          //     )
          //   )
          // )
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  fetchConversation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.FetchConversation),
      switchMap(({ companion }) =>
        this.peopleService.createConversation(companion).pipe(
          map((companion) =>
            PeopleActions.AddConversation({ companion: 'ibuj' })
          )
          // switchMap(() =>
          //   this.peopleService.getConversations().pipe(
          //     tap((data) => console.log(data)),
          //     map((conversationsData) =>
          //       PeopleActions.AddConversations({ conversationsData })
          //     )
          //   )
          // )
          // catchError((error: HttpErrorResponse) => {
          //   const handleError = this.userService.handleError(error);
          //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
          // }),
        )
      )
    )
  );

  // this.actions$.pipe(
  //   ofType(PeopleActions.FetchPeople),
  //   exhaustMap(
  //     () =>
  //       this.peopleService.getPeople().pipe(
  //         map((peopleData) => PeopleActions.AddPeople({ peopleData })),
  //         map(() =>
  //           this.peopleService.getConversations().pipe(
  //             tap((data) => console.log(data)),
  //             map((conversationsData) =>
  //               PeopleActions.AddConversations({ conversationsData })
  //             )
  //             // catchError((error: HttpErrorResponse) => {
  //             //   const handleError = this.userService.handleError(error);
  //             //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //             // }),
  //           )
  //         )
  //       )
  //     // catchError((error: HttpErrorResponse) => {
  //     //   const handleError = this.userService.handleError(error);
  //     //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //     // }),
  //   ),
  //   switchMap(() =>
  //     this.peopleService.getConversations().pipe(
  //       tap((data) => console.log(data)),
  //       map((conversationsData) =>
  //         PeopleActions.AddConversations({ conversationsData })
  //       )
  //       // catchError((error: HttpErrorResponse) => {
  //       //   const handleError = this.userService.handleError(error);
  //       //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //       // }),
  //     )
  //   )

  // fetchConversation$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PeopleActions.FetchConversations),
  //     exhaustMap(() =>
  //       this.peopleService.getConversations().pipe(
  //         tap((data) => console.log(data)),
  //         map((conversationsData) =>
  //           PeopleActions.AddConversations({ conversationsData })
  //         )
  //         // catchError((error: HttpErrorResponse) => {
  //         //   const handleError = this.userService.handleError(error);
  //         //   return of(CardsActions.FetchCardsFailed({ error: handleError }));
  //         // }),
  //       )
  //     )
  //   )
  // );
}
