import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }
  console.log("No esta iniciada la sesión")
  let session_str = localStorage.getItem("session");
  if (session_str) {
    authService.session = JSON.parse(session_str);
    authService.isLoggedIn = true;
    console.log(authService.session)
    return true;
  }
  
  // Redirect to the login page
  return router.parseUrl('login');
};
