import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SortComponent } from '../core/components/sort/sort.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from '../router/app-router.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    LayoutComponent,
    SortComponent,
  ],
  imports: [CommonModule, FormsModule, AppRouterModule],
  exports: [LayoutComponent],
})
export class CoreModule {}
