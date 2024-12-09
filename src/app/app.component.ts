import { Component } from '@angular/core';
import {UserComponent} from "./shared/components/user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {TaskComponent} from "./shared/components/task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
