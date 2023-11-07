import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [SharedModule, ReactiveFormsModule, AuthRouterModule],
})
export class AuthModule {}
