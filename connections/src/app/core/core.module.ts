import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { NotfoundPageComponent } from './pages/notfound/notfound-page.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NotfoundPageComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
