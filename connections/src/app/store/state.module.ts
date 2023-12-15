import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import * as fromProfile from './profile/reducers/profile.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromGroups from './groups/reducers/groups.reducer';
import * as fromPeople from './people/reducers/people.reducer';
import { ProfileEffects } from './profile/effects/profile.effects';
import { SharedModule } from '../shared/shared.module';
import { AuthEffects } from './auth/effects/auth.effects';
import { GroupsEffects } from './groups/effects/groups.effects';
import { PeopleEffects } from './people/effects/people.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {
        profile: fromProfile.reducer,
        auth: fromAuth.reducer,
        groups: fromGroups.reducer,
        people: fromPeople.reducer,
        // router: routerReducer,
      },
      {}
    ),
    EffectsModule.forRoot([
      ProfileEffects,
      AuthEffects,
      GroupsEffects,
      PeopleEffects,
    ]),
    // StoreRouterConnectingModule.forRoot(),
    SharedModule,
  ],
})
export class StateModule {}