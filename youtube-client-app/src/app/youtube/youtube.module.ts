import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { CardColorDirective } from './directives/card-color/card-color.directive';
import { SharedModule } from '../shared/shared.module';
import { NotfoundPageComponent } from './pages/notfound/notfound-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { YouTubeRouterModule } from './youtube-router.module';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HistoryBackDirective } from './directives/historyBack/history-back.directive';

@NgModule({
  declarations: [
    CardComponent,
    YouTubePageComponent,
    CardColorDirective,
    NotfoundPageComponent,
    DetailsPageComponent,
    AdminPageComponent,
    PaginationComponent,
    HistoryBackDirective,
  ],
  imports: [SharedModule, YouTubeRouterModule, ReactiveFormsModule],
  exports: [CardComponent],
})
export class YoutubeModule {}
