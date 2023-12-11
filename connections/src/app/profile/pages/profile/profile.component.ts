import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { IProfile } from '../../models/profile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  profileData!: IProfile;

  constructor(private profileService: ProfileService) {}
  ngOnInit(): void {
    this.subscription = this.profileService
      .getProfile()
      .subscribe((data: IProfile) => {
        this.profileData = data;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
