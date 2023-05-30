import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
prop:string=''
  constructor(private userService: UserService) {
  
  }
  
  ngOnInit() {
    this.userService.PropChanged.subscribe(prop => this.prop = prop,
    
      err => console.log('error has occoured', err),
    ()=>alert("Done")
    )
  }
   

  ngOnDestroy() {
    this.userService.PropChanged.unsubscribe()
  }

}
