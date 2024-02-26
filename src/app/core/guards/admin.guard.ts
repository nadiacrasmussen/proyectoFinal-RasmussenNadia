import { CanActivateFn,Router, createUrlTreeFromSnapshot } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthService } from '../../layouts/auth/pages/auth.service';


export const adminGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const authService = Inject(AuthService);

  return AuthService.authUser?.role === 'ADMIN'
  ?true
  :router.createUrlTree(['dashboard','home']);
};
