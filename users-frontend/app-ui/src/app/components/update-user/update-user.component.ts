import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user !: User;
  id !: number;

  constructor(private userService: UserService, private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
    },
      error => console.log(error));
  }

  onSubmit(){
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      this.router.navigate(["/users"]);
    })
  }
}
