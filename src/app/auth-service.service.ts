import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
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

  checkIfLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  public login(user): void {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
