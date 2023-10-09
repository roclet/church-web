import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 private users:any[]=[];

 constructor() { 

 }

 //for now it takes in the updated list of users
 setUsers(userList:any[]){
  this.users=userList;
 }

}
