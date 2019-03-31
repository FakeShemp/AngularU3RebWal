/* Service that handles HTTP fetches for user info */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  // Returns list of users
  public getUsers(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  // Returns a single user from ID
  public getUser(id): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
  }
}
