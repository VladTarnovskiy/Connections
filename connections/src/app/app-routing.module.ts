import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'youtube',
  //   loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  //   // canActivate: [authGuard],
  // },
  // {
  //   path: 'favorite',
  //   loadChildren: () => import('./favorite/favorite.module').then((m) => m.FavoriteModule),
  //   // canActivate: [authGuard],
  //   component: FavoritePageComponent,
  // },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // { path: '', redirectTo: 'youtube', pathMatch: 'full' },
  // {
  //   path: '**',
  //   component: NotfoundPageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
