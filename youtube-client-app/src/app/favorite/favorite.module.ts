import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavCardComponent } from './components/fav-card/fav-card.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';



@NgModule({
  declarations: [
    FavCardComponent,
    FavoritePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FavoriteModule { }
