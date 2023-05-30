import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable,of,delay} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CustomeValidatorsService {

  constructor() { }


  valdateName(control: FormControl) {
    return ['Kushagra'].includes(control.value) ? null:"Invalid State"
  }
 
  validateEmail(control: FormControl):Observable<any> {
    return of(['test@test.com'].includes(control.value) ? "Invalid Email" : null).pipe(
      delay(3000)
    )
  }
}
