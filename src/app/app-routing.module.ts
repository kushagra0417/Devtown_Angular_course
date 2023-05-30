import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ParentComponent } from './parent/parent.component';
import { ConfermationGuard } from './gaurd/confirmation/confermation.guard';



const routes: Routes = [
  {path: 'home',component: BodyComponent,canDeactivate:[ConfermationGuard]},
  { path: 'user', component: UserComponent, children: [{ path: ':id', component: UserDetailsComponent }, { path: '', component: PlaceholderComponent }] },
  {path: 'parent',component: ParentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
 
];

@NgModule({
 providers:[ConfermationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
