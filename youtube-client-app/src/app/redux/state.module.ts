import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromCards from './cards/reducers/cards.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ cards: fromCards.reducer }, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class StateModule {}
