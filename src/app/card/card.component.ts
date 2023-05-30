import { Component, ViewEncapsulation ,Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, NgZone} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html' ,
  styleUrls: ['./card.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush
 
})
export class CardComponent  {
 //name="Kushagra"//   @Input() myValue=""
 
//   constructor() {
//     console.log("constructor Called")
//   }
//  ngOnChanges(changes: SimpleChanges): void {
//    console.log("ngOnChnages Called")
//  }
//   ngOnInit(): void {
//       console.log("onInit Called")
//   }
//  ngDoCheck(): void {
//      console.log("Dochecked Called")
//   } 
//   ngAfterContentInit(): void {
//       console.log("AfterContentInit is called")
//   }
// ngAfterContentChecked(): void {
//     console.log("AfterContentChecked is called")
// }
//   ngAfterViewInit(): void {
//     console.log("AfterViewInit is called")
//   }
//   ngAfterViewChecked(): void {
//       console.log("AfterViewChecked is called")
//   }
//   ngOnDestroy(): void {
//       console.log("OnDestroy Called")
//   }
// username="Defalt Value"
//   ClickMe() {
//   alert(this.username)
//   }
  
  
  // @ContentChild('paragraph') Para: ElementRef<any> | any
  
  // @ContentChildren('paragraph') paragraph: QueryList<any> | any
  
  // ngAfterViewInit() {
    
  // }
  // ngAfterContentInit(): void {
  //   // console.log(this.Para)
  //   // this.Para.nativeElement.style.color = "red"
  //   this.paragraph.first.nativeElement.style.color = "red"
  //   this.paragraph.last.nativeElement.style.color = "green"
  //   this.paragraph._results[1].nativeElement.style.color="gray"
  // }

//  @Input() number1:number=0 
  
  constructor(private cf:ChangeDetectorRef,private zoon:NgZone) {
 // this.cf.detach()
  }

number=0
  ngOnInit() {
    this.zoon.runOutsideAngular(() => {
      setInterval(() => {
        this.number = ++this.number
        if (this.number > 10) {
          this.zoon.run(() => {
            this.number=this.number
          })
        }
      },500) 
    })
  }
  title3="Child"
  child() {
    console.log("Child")
    return "Child"
  }
}
