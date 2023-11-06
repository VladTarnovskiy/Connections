import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule],
  exports: [AuthPageComponent],
})
export class AuthModule {}
