/* This component handles login/logout functionality */

import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loggedUser: string = '';
  @Input() password: string = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  // Checks if logged in via authService
  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Communicates with authService to log user in
  login() {
    this.authService.login(this.loggedUser, this.password);
  }

  // Communicates with authService to log user out
  logout() {
    this.authService.logout();
  }
}
