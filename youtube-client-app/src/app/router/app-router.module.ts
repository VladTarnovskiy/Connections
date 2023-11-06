import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from '../youtube/pages/youtube/youtube-page.component';
import { NotfoundPageComponent } from '../youtube/pages/notfound-page/notfound-page.component';
import { AuthPageComponent } from '../auth/pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'youtube',
    // component: YouTubePageComponent,
    // component: NotfoundPageComponent,
    component: AuthPageComponent,
  },
  { path: '', redirectTo: 'youtube', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
