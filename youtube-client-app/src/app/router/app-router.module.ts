import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from '../youtube/pages/youtube/youtube-page.component';
import { NotfoundPageComponent } from '../youtube/pages/notfound/notfound-page.component';
import { AuthPageComponent } from '../auth/pages/auth-page/auth-page.component';
import { DetailsPageComponent } from '../youtube/pages/details/details-page.component';
import { authGuard } from '../core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'youtube',
    component: YouTubePageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: AuthPageComponent,
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  {
    path: '**',
    component: NotfoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
