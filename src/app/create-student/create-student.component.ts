import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
/*to create student details from student service and the data given to list page*/
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
        if(data!=null){
        alert("Student details are inserted successfully 😃")
      this.goToStudentList();
        }
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  /*After submitting it goes to saveStudent()*/ 
  onSubmit(){
      if((this.student.name ==='') || (this.student.standard ==='') || (this.student.contact ==='') || (this.student.city ==='') || (this.student.gender ==='') || (this.student.dateOfBirth ==='')){
        let status = confirm("Please fill all the details");
      }
      else{
      var status = confirm("Do you want to insert this record");
      if(status == true){
      this.router.navigate(['students']);
      console.log(this.student);
      this.saveStudent();
      }else{
         this.router.navigate(['create-student']);
      }
  }
}
}
    
