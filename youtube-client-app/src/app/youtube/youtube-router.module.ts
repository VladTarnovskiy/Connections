import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from '../youtube/pages/youtube/youtube-page.component';
import { authGuard } from '../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: YouTubePageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRouterModule {}
