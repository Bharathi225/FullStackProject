import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number = 0;
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

   onSubmit(){
      if((this.student.name === null) || (this.student.standard === null) || (this.student.contact === null) || (this.student.city === null) || (this.student.gender === null) || (this.student.dateOfBirth === null)){
        let pop = confirm("Please fill all the details its mandatory!");
      }
      else{
         this.studentService.updateStudent(this.id, this.student).subscribe(data =>{
         this.confirmUpdateOk();
         console.log(data);
          }
         , error => console.log(error));
      }
    } 
  goToStudentList(){
    this.router.navigate(['students']);
  }
  confirmUpdateOk(){
    var status = confirm("Updated successfully");
    if(status == true){
      console.log("updated..");
      this.goToStudentList();
    }
    else{
      this.router.navigate(['update-student']);
    }
  }
}