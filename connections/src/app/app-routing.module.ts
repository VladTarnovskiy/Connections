import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';

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
    component: LoginComponent,
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    component: RegisterComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
    component: ProfileComponent,
  },

  // {
  //   path: '',
  //   component: RegisterComponent,
  // redirectTo: 'youtube', pathMatch: 'full'
  // },
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
