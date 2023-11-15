import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromCards from './cards/reducers/cards.reducer';
import { CardsEffects } from './cards/effects/cards.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ cardsInfo: fromCards.reducer }, {}),
    EffectsModule.forRoot([CardsEffects]),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
  ],
})
export class StateModule {}
