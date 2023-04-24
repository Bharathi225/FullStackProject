import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name='';
  email='';
  comments='';
 ngOnInit(){}
constructor(private authenticationService: AuthenticationService, private router: Router) { }
checkMail(){
    if(this.name === '' || this.email === ''|| this.comments === ''){
      var status = confirm("please fill all the fields");
    }
    else{
    var status = confirm("Thanks for contact us we will reach you soon");
    if(status==true){
      this.router.navigate(['home']);
    }
  }
  } 

}
