/*
This component checks for button presses and adds or removes users from the list in 
dashboard component. It also handles the functionality of the input field.
*/
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<void>();

  @Input() name = '';

  constructor() { }

  ngOnInit() {
  }

  // Send name to dashboard userList and clear input field
  addUser() {
    this.addUserEvent.emit(this.name);
    this.name = '';
  }

  // Call the remove user method in dashboard
  removeUser() {
    this.removeUserEvent.emit();
  }
}
