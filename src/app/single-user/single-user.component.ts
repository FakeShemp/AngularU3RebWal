/* Displays information about a single user */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: Object;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }

  // Gets information about user from id via usersService
  getUser(id) {
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
