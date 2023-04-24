import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="StudentManagementSystem";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  type: string = "password";

  username = '';
  password = '';
  invalidLogin = false
  emessage = '';

constructor(private router: Router,

private loginService: AuthenticationService) { }
  
ngOnInit(){}
  checkLogin() {
      if (this.loginService.authenticate(this.username, this.password)) {
        alert("Login successfully");
        this.router.navigate(['students']); 
        console.log("navigate..");
        this.invalidLogin=false;
      }
      else
         this.invalidLogin=true;
         this.emessage = 'Enter correct credentials';
         // alert("Please fill out this valid field");
}
 hideShowPwd(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  } 

}
