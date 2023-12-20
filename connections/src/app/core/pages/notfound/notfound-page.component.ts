import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.scss'],
})
export class NotfoundPageComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkNotFoundPage(true);
  }

  ngOnDestroy() {
    this.authService.checkNotFoundPage(false);
  }
}
