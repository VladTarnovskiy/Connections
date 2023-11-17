import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CardsActions from 'src/app/redux/cards/actions/cards.action';
import { CustomCard } from '../../models/customCard.model';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCard!: CustomCard;

  constructor(private store: Store) {}

  removeCustomCard(id: string) {
    this.store.dispatch(CardsActions.RemoveCustomCard({ customCardId: id }));
    const storageCustomCards = localStorage.getItem('customCards');
    if (storageCustomCards) {
      const customCards = JSON.parse(storageCustomCards) as CustomCard[];
      customCards.filter((card) => card.id !== id);
      localStorage.setItem('customCards', JSON.stringify(customCards));
    }
  }
}
