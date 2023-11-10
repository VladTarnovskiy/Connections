import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePageComponent } from './pages/youtube/youtube-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: YouTubePageComponent,
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeRouterModule {}
