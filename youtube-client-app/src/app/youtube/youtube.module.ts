import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { CardColorDirective } from './directives/card-color/card-color.directive';
import { SharedModule } from '../shared/shared.module';
import { SearchDataService } from './services/search-data/search-data.service';

@NgModule({
  declarations: [CardComponent, YouTubePageComponent, CardColorDirective],
  imports: [SharedModule, CommonModule],
  providers: [SearchDataService],
  exports: [YouTubePageComponent],
})
export class YoutubeModule {}
