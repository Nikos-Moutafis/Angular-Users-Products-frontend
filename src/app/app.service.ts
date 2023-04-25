import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAPIList, User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggenIn$ = this.loggedInSubject.asObservable();

  private loggedInFullnameSubjext = new BehaviorSubject<string>('');
  loggedInFullname$ = this.loggedInFullnameSubjext.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    this.http
      .get<UserAPIUserOne>(`${USER_API}/findOne/${username}`)
      .subscribe((user) => {
        if (user.data) {
          this.loggedInSubject.next(user.data.password === password);
          this.loggedInFullnameSubjext.next(
            `${user.data.name}  ${user.data.surname}`
          );
        }
      });
  }
  logout() {
    this.loggedInSubject.next(false);
    this.loggedInFullnameSubjext.next('');
  }
}
