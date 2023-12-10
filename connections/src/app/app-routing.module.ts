import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { NotfoundPageComponent } from './core/pages/notfound/notfound-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./connections/connections.module').then(
        (m) => m.ConnectionsModule
      ),
    // canActivate: [authGuard],
  },
  // {
  //   path: 'favorite',
  //   loadChildren: () => import('./favorite/favorite.module').then((m) => m.FavoriteModule),
  //   // canActivate: [authGuard],
  //   component: FavoritePageComponent,
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
  {
    path: '**',
    component: NotfoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
