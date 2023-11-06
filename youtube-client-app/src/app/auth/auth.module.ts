import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthPageComponent],
})
export class AuthModule {}
