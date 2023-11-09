import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sortBlock = new EventEmitter<boolean>();

  constructor(private authService: AuthService, public router: Router) {}

  turnSortBlock(data: boolean) {
    this.sortBlock.emit(data);
  }

  logout() {
    this.authService.logout();
  }
}
