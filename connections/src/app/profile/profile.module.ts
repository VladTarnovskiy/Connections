import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, ReactiveFormsModule],
})
export class ProfileModule {}
