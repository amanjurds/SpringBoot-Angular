import { Component } from '@angular/core';

import { User } from 'src/app/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  // firstName !: String;
  // lastName !: String;
  // emailId !: String;
  // job !: String;
  user : User = new User();

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/users']);
    },
    error => {
      console.log(error);
    });
  }
}
