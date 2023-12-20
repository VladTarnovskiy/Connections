import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfileTheme } from './store/profile/selectors/profile.selectors';
import * as ProfileActions from 'src/app/store/profile/actions/profile.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'connections';
  subscription!: Subscription;
  theme$ = this.store.select(selectProfileTheme);
  theme!: string;

  constructor(private store: Store) {}

  ngOnInit() {
    const theme = localStorage.getItem('theme');

    if (theme) {
      const storageThemeValue = JSON.parse(theme);
      this.store.dispatch(
        ProfileActions.ChangeTheme({ theme: storageThemeValue })
      );
    }
    this.subscription = this.theme$.subscribe((theme) => {
      this.theme = theme;
      const bodyElement = document.body;
      if (theme === 'dark') {
        this.store.dispatch(ProfileActions.ChangeTheme({ theme: 'dark' }));
        bodyElement.classList.add('themeDark');
      } else {
        this.store.dispatch(ProfileActions.ChangeTheme({ theme: 'white' }));
        bodyElement.classList.remove('themeDark');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
