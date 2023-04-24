import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }
  
  exitMessage(){
    alert("logout successfully");
    this.router.navigate(['login']);
}
}
  /*login(){
    var status=confirm("logout successfully");
    if(status==true)
    this.router.navigate(['login']);
  }*/