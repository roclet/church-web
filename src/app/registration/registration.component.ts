
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  //array to store user objects
  RegisteredUsers: any[]=[];
  UserObject:any={FullName:'',email:'', password:'',checked:false};
  ButtonDisabled:boolean=true;
  registrationForm = new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]),
    email:new FormControl('',Validators.email),
    password:new FormControl('',[Validators.minLength(8),Validators.required]),
    check: new FormControl(false,Validators.requiredTrue)
  });


  ngOnInit(): void {
    
  }
  OnRegister(){
    
    //commits users to local memory
    this.RegisteredUsers.push(this.registrationForm.value);
    console.log(this.registrationForm.value);
    localStorage.setItem('signUpUsers',JSON.stringify(this.registrationForm.value));
    alert("You have submitted");
    
  }
  
  constructor(private router:Router) { }
 
}