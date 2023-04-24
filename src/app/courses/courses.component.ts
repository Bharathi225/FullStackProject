import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  isLowerGrade : boolean = true;
  lowGrade = '';

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.lowGrade = this.route.snapshot.params['lowerGrade'];
    console.log("lower grade " +this.lowGrade);

    
  }

  checkLowerGrade():boolean{
    if(this.lowGrade == 'true'){
      this.isLowerGrade = true;
      console.log("Lower grade");
    }
    else{
      this.isLowerGrade = false;
      console.log("Higher Grade");
    }

    return this.isLowerGrade;
  }
}
