import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users !: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  updateUser(id : number) {
    this.router.navigate(['update-user', id]);
  }

  handleDelete(id : number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  viewUser(id : number) {
    this.router.navigate(['/user', id]);
  }
}
