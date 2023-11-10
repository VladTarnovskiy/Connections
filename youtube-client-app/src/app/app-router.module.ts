import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPageComponent } from './youtube/pages/notfound/notfound-page.component';
import { authGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
