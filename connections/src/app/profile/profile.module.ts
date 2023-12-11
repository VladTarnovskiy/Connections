import { NgModule } from '@angular/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule],
})
export class ProfileModule {}
