import { ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren ,Input,Output} from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { Laptop } from '../Classes/laptop';
import { hookelogger } from '../Decorator/hooklogger.decorator';
import { readonly } from '../Decorator/Readonly.decorator';
import { FormGroup,FormControl, Validators, FormArray,ValidationErrors,ValidatorFn,AbstractControl, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomeValidatorsService } from '../services/custome-validators.service';
import { canComponetDeactivate } from '../gaurd/confirmation/confermation.guard';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
  
// @hookelogger({
//     hooks:[
//       'ngOnChanges',
//       'ngOnInit',
//       'ngDoCheck'
//   ]
//   })  
  
export class BodyComponent implements canComponetDeactivate  {
  loginForm:FormGroup=this.fb.group({})
  constructor(private fb:FormBuilder,private cv:CustomeValidatorsService) {}
  @Input() Data: String = ""
  @Output() Data2:String=""
  // value = ""
  
  // sendData(value: string) {
  //   this.value = value
  // }
// src="https://images.unsplash.com/photo-1519068737630-e5db30e12e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
 
  // color="green"
  // bgColor="red"
  // changeColor() {
  //   this.color = "red"
  //   this.bgColor="blue"
  // }
  
// classes='stylecolor stylesize'
// booleanValue=true
//   objectValue = {
//     stylecolor: false,
//     stylesize:true
// }
//   valuesubmit: string
//   CardExist:boolean=true
//   constructor() {
//     this.valuesubmit =""
  
// }


 
//   submit(val:any) {
//   this.valuesubmit=val.value
// }

//   Destroy() {
//     this.CardExist=false
//   }
  
//   @ViewChild('box') box: ElementRef|any;
//   // @ViewChild(CardComponent) child: CardComponent | any;
//   @ViewChildren('box') boxes: QueryList<any> | any;
//   Name: string = "Devtown"

//   ngAfterViewInit() {
//     console.log(this.box)
//     console.log(this.boxes)
//     // console.log(this.child)
//     this.boxes.first.nativeElement.style.color = "red"
//     this.boxes._results[1].nativeElement.style.color = "green"
//     this.boxes.last.nativeElement.style.color="Pink"
//  }
  // childproperty() {
  //  this.child.username="Kushagra"
  // }
  // childMethod() {
  //   this.child.ClickMe()
  // }
//   number = 0
//  bool=true
  //ngOnInit() {
  //   setInterval(() => {
  //     this.number = ++this.number
      
  // },1000)
//}

  // title2="Parent"
  // title=false
  // parent() {
  //   console.log("Parent")
  //   return"Parent"
  // }
  // Produts = [{ ID:1,name: "car", price: 100000 },
  //   {ID:2, name: "Bike", price: 100000 },
  //   { ID:3,name: "Van", price: 100000 },
  //   { ID:4,name: "Auto", price: 100000 }  ]

  // prod:any = {}
  
  // call() {
  // console.log(this.prod)
//}

  

  shape = {
    background: "red",
    height: "150px",
    width:"100px"
  }
  reshape = {
    stylecolor: true,
    stylesize: true,
    styleborder: false,
    styleshape:false
  }
  changecolor() {
    this.shape.background="green"
  }


  changeshape() {
    this.reshape.styleshape = true
    this.reshape.styleborder=true
  }

  valuetxt = "Welcome to devtown"
  
  print() {
    alert(this.valuetxt)
  }


  isAvalable=true
  
  TisAvalable() {
    this.isAvalable=!this.isAvalable
  }
  

  data = 'Parent Component' 
  

  today=Date()

  value =[30]
 
  
  changeValue(val: any) {
    this.value.pop()
    this.value.push(val)
    console.log(this.value)
  }
  
  @readonly("The Mission of the Devtown is to Make the Education Affordable") Mission:string=""
  ngOnInit() {
    let laptop: Laptop = new Laptop()
    console.log(laptop)
    console.log(this.Mission)
    this.Mission = "New Mission"
    console.log(this.Mission)


    this.loginForm = this.fb.group({
      name: [null,[this.cv.valdateName]],
      email: ["Kush@gmail.com",[Validators.email],[this.cv.validateEmail]],
      phone: [],
      userName: [],
    
      password: []
    })
  
  }


  genders: string[] = ['Male', "Female", "Others"]
  Communications:string[]=['Phone','Email',"Telegram"]

  Login(Item:any) {
    console.log(Item)
  }
  



 



  get name() {
   return this.loginForm.get('name')
  }
  get email() {
    return this.loginForm.get('email')
  }
  
  get hobbyControls() {
    return (<FormArray>this.loginForm.get('hobbies')).controls
  }
  Submit() {
    console.log(this.loginForm)
    this.loginForm.reset()
  }

  onAddtextbox(){
    const  control = new FormControl(null,[Validators.required]);
    
    (<FormArray>this.loginForm.get('hobbies')).push(control)
  }



  restrictedname:string[]=['Kushagra']

  restrictedEmail(control:FormControl): ValidatorFn {
    
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.restrictedname.includes(control.value)){
        return {nameIsRestricted: true}
      }
      return null
    };
  }



  reset() {
    this.loginForm.reset()
  }
   

  confirm(): boolean{
    return confirm("are you sure do you want to nevigate away?")
  }

 
}
