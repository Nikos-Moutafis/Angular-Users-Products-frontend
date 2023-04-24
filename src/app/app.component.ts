import { Component } from '@angular/core';
import { MenuItem } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Products Frontend';

  usersMenu: MenuItem[] = [
    { text: 'List all Users', link: 'user/list' },
    { text: 'Insert a User', link: 'user/insert' },
    { text: 'Delete a User', link: 'user/delete' },
    { text: 'Update a User', link: 'user/update' },
  ];
  productsMenu: MenuItem[] = [
    { text: 'List all Products', link: 'not implemented' },
    { text: 'Insert a Product', link: 'not implemented' },
    { text: 'Update a Product', link: 'not implemented' },
    { text: 'Delete a Product', link: 'not implemented' },
  ];
}
