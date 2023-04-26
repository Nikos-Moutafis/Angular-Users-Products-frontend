import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAPIList, User, UserAPIUserOne } from 'shared';
import { BehaviorSubject } from 'rxjs';
import { UiService } from 'ui';
import { Router } from '@angular/router';

const USER_API = 'https://codingfactory.ddns.net/api/user';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggenIn$ = this.loggedInSubject.asObservable();

  private loggedInFullnameSubjext = new BehaviorSubject<string>('');
  loggedInFullname$ = this.loggedInFullnameSubjext.asObservable();

  constructor(
    private http: HttpClient,
    private alertService: UiService,
    private router: Router
  ) {}

  login(username: string, password: string) {
    this.setIsLoading(true);
    this.http
      .get<UserAPIUserOne>(`${USER_API}/findOne/${username}`)
      .subscribe((user) => {
        if (user.data && user.data.password === password) {
          this.loggedInSubject.next(user.data.password === password);
          this.loggedInFullnameSubjext.next(
            `${user.data.name}  ${user.data.surname}`
          );
          this.alertService.alertDismiss(0);
          this.alertService.newAlert({
            type: 'success',
            heading: `Welcome  ${this.loggedInFullnameSubjext.value}`,
            text: 'Nice to see you again',
          });
          this.router.navigate(['/user']);
        } else {
          this.alertService.newAlert({
            type: 'danger',
            heading: 'Authetication Error',
            text: 'Wrong username or password',
          });
        }
        this.setIsLoading(false);
      });
  }
  logout() {
    this.loggedInSubject.next(false);
    this.loggedInFullnameSubjext.next('');
    this.router.navigate(['']);
    this.alertService.alertDismiss(0);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
  }
}
