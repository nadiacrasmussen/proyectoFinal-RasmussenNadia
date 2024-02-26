import { delay, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../../dashboard/pages/users/models';
import { Router } from '@angular/router';

interface loginData {
  email: null | string;
  password: null | string;
}
const MOCK_USER = {
  id: 1,
  firstName: 'Macarena',
  lastName: 'Sartorio',
  email: 'macarenasartorio@gmail.com',
  password: 'ms1503',
  role: 'admin',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  public static authUser: User | null = null;
  constructor(private Router: Router) {}

  private setAuthUser(mockUser: User): void {
    AuthService.authUser = mockUser;
    localStorage.setItem('token', 'ms1503');
  }
  login(data: loginData): void {
    console.log(data);
    console.log({MOCK_USER})
    if (
      data.email == MOCK_USER.email &&
      data.password == MOCK_USER.password
    ) {
      AuthService.authUser = MOCK_USER;
      this.setAuthUser(MOCK_USER);
      this.Router.navigateByUrl('/home');
    }
  }

  logout(): void {
    AuthService.authUser = null;
    this.Router.navigate(['/auth/login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return of(localStorage.getItem('token')).pipe(
      delay(1000),
      map((response) => !!response),
      tap(() => this.setAuthUser(MOCK_USER))
    );
  }
}
