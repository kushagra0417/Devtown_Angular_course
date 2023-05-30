import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/Interface/user';
import { Observable, of, delay } from 'rxjs'

import { BehaviorSubject } from 'rxjs';

import {map,retry,catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _rootUrl: string = "https://jsonplaceholder.typicode.com/users"
  private _rootPostUrl: string = "https://jsonplaceholder.typicode.com/comments"
  private _prop:string='foo'
  

  public PropChanged:BehaviorSubject<string>=new BehaviorSubject<string>(this._prop)
  constructor(private http: HttpClient) { }
  

  getProp(): string{
    return this._prop
  }

  setProp(prop: string): void{
    this._prop = prop
    
    this.PropChanged.next(this._prop)
  }
 
  getUsersViaREST(): Observable<IUser[]>{
    let headers=new HttpHeaders().set('Authorization','Bearer you-access-token-hear')
    return this.http.get<IUser[]>(this._rootUrl, { headers }).pipe(map(users => {
      return users.map(user => {
        return {
          id: user.id,
          name: user.name,
          email:user.email
        }
      })
    }))
  }

  getUserByIdViaRest(id:number):Observable<IUser> {
    return this.http.get<IUser>(`${this._rootUrl}/${id}bucfuy`).pipe(retry(3))
  }
   
  createUser(user:IUser):Observable<IUser> {
   return this.http.post<IUser>(this._rootUrl,user)
  }
  updateUser(user:IUser):Observable<IUser> {
    return this.http.put<IUser>(`${this._rootUrl}/${user.id}`,user)
  }

  deleteUser(id:number | null):Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootUrl}/${id}`)
  }
  getUserPost(id: number ): Observable<any> {
    
    let params=new HttpParams().set('postId',id.toString())
    return this.http.get(this._rootPostUrl,{params})
  }
}
