import { Component } from '@angular/core';
import { Card, CardItems } from 'src/app/models/card.model';
import { data } from 'src/data/data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  cardsInfo: CardItems = data;
  cards: Card[] = data.items;
}
