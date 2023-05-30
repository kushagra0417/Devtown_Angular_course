import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface canComponetDeactivate{
  confirm():boolean
}
@Injectable({
  providedIn: 'root'
})
  

export class ConfermationGuard implements CanDeactivate<canComponetDeactivate> {
  canDeactivate(
    component: canComponetDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.confirm();
  }
  
}
