import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAPIList, User } from 'shared';
import { delay } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<UserAPIList>(`${USER_API}/findall`).pipe(delay(10));
  }
}
