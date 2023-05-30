import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { IUser } from '../Interface/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  user: IUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  post:any
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userService
        .getUserByIdViaRest(+params['id'])
        .subscribe((user) => (this.user = user));
    });
  }


  createUser() {
    this.userService.createUser(this.user).subscribe((user)=> alert(`A new user was Created with an id:${user.id}`))
  }
  
  updateUser() { 
    this.user.name = "Rama Krishna"
    this.user.email = "rama.krishna@gmail.com"
    this.userService.updateUser(this.user).subscribe(user=>alert("The user was Updated sucessfully"))
  }
  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(user=>alert("The user was deleted Sucessfully "))
  }
  getUsersPost() {
    this.post = this.userService.getUserPost(this.user.id)
  }
}
