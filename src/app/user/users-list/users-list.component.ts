import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserAPIList } from 'shared';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  loading = false;
  userList: User[] = [];
  subsciption: Subscription | undefined;

  usernameSortType: 'asc' | 'desc' = 'asc';
  firstnameSortType: 'asc' | 'desc' = 'asc';
  lastnameSortType: 'asc' | 'desc' = 'asc';

  sortDirectionUser: 'asc' | 'desc' = 'asc';
  sortDirectionFname: 'asc' | 'desc' = 'asc';
  sortDirectionLastname: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting "findAll" API call');
    this.loading = true;

    this.userService.findAll().subscribe({
      next: (apiData: UserAPIList) => {
        const { status, data } = apiData;
        this.userList = data;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subsciption?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case 'username':
        this.usernameSortType =
          this.usernameSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionUser =
          this.sortDirectionUser === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.usernameSortType]);
        break;

      case 'name':
        this.firstnameSortType =
          this.firstnameSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionFname =
          this.sortDirectionFname === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.firstnameSortType]);
        break;

      case 'surname':
        this.lastnameSortType =
          this.lastnameSortType === 'asc' ? 'desc' : 'asc';
        this.sortDirectionLastname =
          this.sortDirectionLastname === 'asc' ? 'desc' : 'asc';
        this.userList = orderBy(this.userList, [key], [this.lastnameSortType]);
        break;

      default:
        break;
    }
  }
}
