import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { CardColorDirective } from './directives/card-color/card-color.directive';
import { SharedModule } from '../shared/shared.module';
import { SearchDataService } from './services/search-data/search-data.service';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    CardComponent,
    YouTubePageComponent,
    CardColorDirective,
    NotfoundPageComponent,
  ],
  imports: [SharedModule, CommonModule],
  providers: [SearchDataService],
  exports: [YouTubePageComponent, NotfoundPageComponent],
})
export class YoutubeModule {}
