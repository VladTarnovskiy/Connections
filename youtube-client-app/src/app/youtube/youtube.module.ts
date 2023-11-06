import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { CardColorDirective } from './directives/card-color/card-color.directive';
import { SharedModule } from '../shared/shared.module';
import { NotfoundPageComponent } from './pages/notfound/notfound-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';

@NgModule({
  declarations: [
    CardComponent,
    YouTubePageComponent,
    CardColorDirective,
    NotfoundPageComponent,
    DetailsPageComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule],
  exports: [YouTubePageComponent, NotfoundPageComponent, DetailsPageComponent],
})
export class YoutubeModule {}
