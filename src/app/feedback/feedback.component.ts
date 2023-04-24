import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
   rate='';
  rating='';
  commentText='';
 ngOnInit(){}
constructor(private authenticationService: AuthenticationService, private router: Router) { }
sendRating(){
    if(this.rate === '' || this.rating === ''|| this.commentText === ''){
      var status = confirm("please fill all the fields");
      if(status=true){
        this.router.navigate(["feedback"]);
      }
    }
    else{
    var status = confirm("Thanks for your feedback");
    this.router.navigate(["students"]);
  }
  } 
 }

