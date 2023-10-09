import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserObjectService {
  public fullname: string="";
  public email: string="";
  public password: string="";
  public checked: boolean=false;
  constructor() { }
}
