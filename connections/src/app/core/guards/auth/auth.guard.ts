import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.isLoggedIn$.subscribe((isAuth) => {
    if (isAuth) {
      return true;
    }

    return router.navigate(['auth/login']);
  });
};
