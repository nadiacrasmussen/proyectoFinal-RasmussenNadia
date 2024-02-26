import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { AuthService} from '../../layouts/auth/pages/auth.service';
import { map } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const authService = Inject(AuthService);

  return   authService.verifyToken()
  .pipe(
  map((isAuthenticated)=>isAuthenticated ?true
  :router.navigate(['/auth/login'])))

};
