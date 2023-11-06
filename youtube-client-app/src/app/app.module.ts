import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, YoutubeModule, CoreModule],
})
export class AppModule {}
