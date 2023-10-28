import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortComponent } from './components/sort/sort.component';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from './material/material.module';
import { CardColorDirective } from './directives/card-color.directive';
import { SearchDataService } from './services/search-data.service';
import { ButtonComponent } from './components/button/button.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SearchComponent,
    SortComponent,
    CardComponent,
    CardColorDirective,
    FilterPipe,
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
