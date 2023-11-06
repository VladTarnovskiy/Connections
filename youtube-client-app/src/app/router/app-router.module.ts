import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from '../youtube/pages/youtube/youtube-page.component';
import { NotfoundPageComponent } from '../youtube/pages/notfound/notfound-page.component';
import { AuthPageComponent } from '../auth/pages/auth-page/auth-page.component';
import { DetailsPageComponent } from '../youtube/pages/details/details-page.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YouTubePageComponent,
    // component: NotfoundPageComponent,
    // component: AuthPageComponent,
  },
  {
    path: 'details/:id',
    // component: YouTubePageComponent,
    // component: NotfoundPageComponent,
    component: DetailsPageComponent,
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
