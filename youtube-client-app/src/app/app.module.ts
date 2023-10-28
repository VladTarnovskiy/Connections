import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CardColorDirective } from './directives/card-color.directive';
import { SearchDataService } from './services/search-data.service';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SearchComponent,
    SortComponent,
    CardComponent,
    CardColorDirective,
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ButtonComponent,
  ],
})
export class AppModule {}
