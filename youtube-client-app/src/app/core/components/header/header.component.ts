import {
  Component,
  EventEmitter,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  logIn = false;

  @Output() sortBlock = new EventEmitter<boolean>();

  constructor(private authService: AuthService, public router: Router) {}

  turnSortBlock(data: boolean) {
    this.sortBlock.emit(data);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.subscription = this.authService.isLoggedIn$.subscribe((data) => {
      this.logIn = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
