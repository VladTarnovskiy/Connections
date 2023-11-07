import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [AuthPageComponent],
})
export class AuthModule {}
