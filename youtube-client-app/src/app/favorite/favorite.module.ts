import { NgModule } from '@angular/core';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FavoritePageComponent],
  imports: [YoutubeModule, SharedModule],
})
export class FavoriteModule {}
