import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { Observable, delay, mergeMap, of, tap } from 'rxjs';

let USERS_DB: User[] = [];
let ROLES_DB: String[] = ['ADMIN', 'USER'];
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  getUserById(id: number | string): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000));
  }
  getRoles(): Observable<String[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  createUser(payload: User) {
    return this.httpClient.post<User>(
      'http://localhost:3000/users',
      payload
    ).pipe(mergeMap(() => this.getUsers()));
  }

  deleteUser(userID: Number) {
    USERS_DB = USERS_DB.filter((User) => User.id !== userID);
    return this.getUsers().pipe(
      tap(() => alert('Realizado Se elimino Correctamente'))
    );
  }
}
