import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  imgPath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  //Cant use this method with Signals
  // get imgPath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectedUser() {
    console.log("User Selected.");
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
  }



}
