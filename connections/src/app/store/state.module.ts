import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import * as fromProfile from './profile/reducers/profile.reducer';
// import * as fromFavorites from './favorite/reducers/fav-cards.reducer';
import { ProfileEffects } from './profile/effects/profile.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {
        profileData: fromProfile.reducer,
        // favoriteCards: fromFavorites.reducer,
        // router: routerReducer,
      },
      {}
    ),
    EffectsModule.forRoot([ProfileEffects]),
    // StoreRouterConnectingModule.forRoot(),
    SharedModule,
  ],
})
export class StateModule {}
