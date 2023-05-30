import { Component ,OnInit} from '@angular/core';
import { UserService } from '../services/user/user.service';
import { IUser } from '../Interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  user: IUser[]=[]
  constructor(private userService:UserService) {
    
  }
  ngOnInit(): void {
    this.userService.getUsersViaREST().subscribe(
        users=> this.user=users
    )
    
   
  }


  }

  





