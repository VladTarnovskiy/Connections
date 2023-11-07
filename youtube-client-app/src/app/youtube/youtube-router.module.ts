import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { authGuard } from '../core/guards/auth/auth.guard';
import { DetailsPageComponent } from './pages/details/details-page.component';

const routes: Routes = [
  {
    path: '',
    component: YouTubePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRouterModule {}
