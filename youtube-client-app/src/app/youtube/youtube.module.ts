import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { CardComponent } from './components/card/card.component';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { CardColorDirective } from './directives/card-color/card-color.directive';
import { SharedModule } from '../shared/shared.module';
import { SearchDataService } from './services/search-data/search-data.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SortComponent,
    CardComponent,
    YouTubePageComponent,
    CardColorDirective,
  ],
  imports: [FormsModule, SharedModule, CommonModule],
  providers: [SearchDataService],
  exports: [YouTubePageComponent],
})
export class YoutubeModule {}
