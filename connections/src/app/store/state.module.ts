import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import * as fromProfile from './profile/reducers/profile.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromGroups from './groups/reducers/groups.reducer';
import * as fromPeople from './people/reducers/people.reducer';
import * as fromConversation from './conversation/reducers/conversation.reducer';
import { ProfileEffects } from './profile/effects/profile.effects';
import { SharedModule } from '../shared/shared.module';
import { AuthEffects } from './auth/effects/auth.effects';
import { GroupsEffects } from './groups/effects/groups.effects';
import { PeopleEffects } from './people/effects/people.effects';
import { ConversationEffects } from './conversation/effects/conversation.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {
        profile: fromProfile.reducer,
        auth: fromAuth.reducer,
        groups: fromGroups.reducer,
        people: fromPeople.reducer,
        conversation: fromConversation.reducer,
        // router: routerReducer,
      },
      {}
    ),
    EffectsModule.forRoot([
      ProfileEffects,
      AuthEffects,
      GroupsEffects,
      PeopleEffects,
      ConversationEffects,
    ]),
    // StoreRouterConnectingModule.forRoot(),
    SharedModule,
  ],
})
export class StateModule {}
