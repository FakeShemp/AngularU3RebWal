import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() loggedUser: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  checkIfLoggedIn() {
    return this.authService.checkIfLoggedIn();
  }

  login() {
    this.authService.login(this.loggedUser);
    this.loggedUser = '';
    this.router.navigate(['/dashboard'])
  }

  logout() {
    this.authService.logout();
  }

}
