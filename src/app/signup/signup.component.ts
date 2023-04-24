import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  type: string = "password";

  firstName = '';
  lastName = '';
  email = '';
  username = '';
  password = '';

constructor(private authenticationService: AuthenticationService, private router: Router) { }

ngOnInit(){}

checkSignup(){
    if((this.firstName === '') || (this.lastName === '')  || (this.email === '') || (this.password === '') || (this.username === '')){
      let status = confirm("Please fill all the fields");
    }
    else{
    var status= confirm("Registered Successfully!");
      if (status == true) {
        this.router.navigate(['login']);
         }
        }
     }
hideShowPwd(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  } 

}