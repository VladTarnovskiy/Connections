import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from '../youtube/pages/youtube/youtube-page.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YouTubePageComponent,
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
