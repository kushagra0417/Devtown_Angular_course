import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iNRDOLL',
  pure:false
})
export class INRDOLLPipe implements PipeTransform {

  transform(value: any, ...args: number[]): unknown {
   
    let a =value

   return a[0]
  }

}
