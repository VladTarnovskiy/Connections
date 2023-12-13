import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import * as fromProfile from './profile/reducers/profile.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import { ProfileEffects } from './profile/effects/profile.effects';
import { SharedModule } from '../shared/shared.module';
import { AuthEffects } from './auth/effects/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {
        profileData: fromProfile.reducer,
        authData: fromAuth.reducer,
        // router: routerReducer,
      },
      {}
    ),
    EffectsModule.forRoot([ProfileEffects, AuthEffects]),
    // StoreRouterConnectingModule.forRoot(),
    SharedModule,
  ],
})
export class StateModule {}
