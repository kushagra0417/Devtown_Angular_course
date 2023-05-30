import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  prop:string=''
  constructor(private userService: UserService) {
  
  }
  
  ngOnInit() {
    this.userService.PropChanged.subscribe(prop=>this.prop=prop)
    
  }
  ChangeProp() {
    this.userService.setProp('bar')
  }
}
