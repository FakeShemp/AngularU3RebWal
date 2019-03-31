/* Service that handles authentication (login/logout) */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFull } from './models/admin-full.model'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedUser: string;

  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor(public router: Router) {
    this.loggedUser = undefined;
  }

  // Checks localStorage for user login info, returns result
  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  // Checks if login info is in admins and logs in if it is
  public login(user, pass): void {
    // forEach is dumb here but works since we only have two admins
    this.admins.forEach(admin => {
      if (admin.email === user) {
        if (admin.password === pass) {
          localStorage.setItem('user', user);
          this.loggedUser = user;
          this.router.navigate(['/dashboard'])
        };
      }
    });
  }

  // Clear user login info
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
