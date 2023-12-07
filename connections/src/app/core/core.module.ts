import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
