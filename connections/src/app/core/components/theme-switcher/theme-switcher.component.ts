import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import { selectProfileTheme } from 'src/app/store/profile/selectors/profile.selectors';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  theme = 'white';
  theme$ = this.store.select(selectProfileTheme);

  constructor(private store: Store) {}

  changeTheme() {
    const bodyElement = document.body;
    if (this.theme === 'white') {
      // this.theme = false;
      this.store.dispatch(ProfileActions.ChangeTheme({ theme: 'dark' }));
      localStorage.setItem('theme', JSON.stringify('dark'));
      bodyElement.classList.add('themeDark');
    } else {
      this.theme = 'white';
      this.store.dispatch(ProfileActions.ChangeTheme({ theme: 'white' }));
      localStorage.setItem('theme', JSON.stringify('white'));
      bodyElement.classList.remove('themeDark');
    }
  }

  ngOnInit() {
    this.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
