import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

export const loginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  let session_str = localStorage.getItem("session");
  if (session_str) {
    authService.session = JSON.parse(session_str);
    authService.isLoggedIn = true;
    console.log(authService.session)
    return router.parseUrl('home');
  }
  
  // Redirect to the login page
  return true;
};
