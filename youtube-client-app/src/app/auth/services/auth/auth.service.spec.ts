import { fakeAsync, tick } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', fakeAsync(() => {
    let value: boolean | undefined;
    service.login({ password: 'password', login: 'login' }).subscribe();
    tick(2000);

    service.isLoggedIn$.subscribe((servValue) => {
      value = servValue;
    });

    expect(value).toBe(true);
  }));

  it('should logout', fakeAsync(() => {
    let value: boolean | undefined;
    service.login({ password: 'password', login: 'login' }).subscribe();
    tick(2000);

    service.isLoggedIn$.subscribe((servValue) => {
      value = servValue;
    });

    expect(value).toBe(true);

    service.logout();

    expect(value).toBe(false);
  }));
});
