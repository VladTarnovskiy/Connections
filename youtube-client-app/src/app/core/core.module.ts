import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SortComponent } from './components/sort/sort.component';
import { AppRouterModule } from '../app-router.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    LayoutComponent,
    SortComponent,
  ],
  imports: [AppRouterModule, SharedModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
