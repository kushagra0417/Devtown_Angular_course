import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { BodyComponent } from './body/body.component';
import { RedElDirective } from './red-el.directive';
import { HightlightTxtDirective } from './hightlight-txt.directive';
import { AlternateNgIFDirective } from './alternate-ng-if.directive';
import { INRDOLLPipe } from './inrdoll.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomeValidatorsService } from './services/custome-validators.service';
import {HttpClientModule} from "@angular/common/http"
import { UserService } from './services/user/user.service';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ParentComponent } from './parent/parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   FooterComponent,
    CardComponent,
   BodyComponent,
    RedElDirective,
    HightlightTxtDirective,
    AlternateNgIFDirective,
    INRDOLLPipe,
    UserComponent,
    HeaderComponent,
   UserDetailsComponent,
    PlaceholderComponent,
    ParentComponent,
    OneComponent,
    TwoComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomeValidatorsService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
