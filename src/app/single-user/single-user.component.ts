import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service'


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: Object;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUser(params.id);
    })
  }

  getUser(id) {
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }
}
