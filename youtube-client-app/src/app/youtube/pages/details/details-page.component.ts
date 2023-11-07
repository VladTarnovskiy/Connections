import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Card } from '../../models/card.model';
import { SearchDataService } from '../../services/search-data/search-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  card!: Observable<Card | undefined>;

  constructor(
    private route: ActivatedRoute,
    private service: SearchDataService,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map((params: ParamMap) => this.service.getCard(params.get('id'))))
      .subscribe((card) => {
        this.card = card;
      });
  }
}
