/*
This is the dashboard that stores the user names in a list and acts as 
a communicator and parent for the child components.
*/

import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList: string[];

  constructor(private authService: AuthServiceService) {
    this.userList = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack"]
  }

  ngOnInit() {
  }

  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  // Add a user name in the first position of list
  getUser($event: string) {
    this.userList.unshift($event);
  }

  // Remove the last user in list
  popUser() {
    this.userList.pop();
  }
}
