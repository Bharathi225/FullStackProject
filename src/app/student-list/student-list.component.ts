import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  firstName : String = '';
  studentFoundBySearch : Student[] = [];
  gradeValue : number= 0;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
      console.log(this.students);
    });
  }

  studentDetails(id: number){
    //console.log(id);
    this.router.navigate(['student-details', id]);
    //console.log("I Came here");
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  confirmDelete(student : Student){
    var status= confirm("You want to delete this record?");
      if (status==true) {
        this.deleteStudent(student.id);
      }
      else{
        this.getStudents();
      }
  }

  removeAllStudents():void{
    var status=confirm("Do you want to remove all the records!!");
    if(status==true){
    this.studentService.deleteAll().subscribe(
      data=>{
        console.log(data);
        this.getStudents();
      },
      error=>{
        console.log(error);
      }
    );
  }
}

  searchByName(){
    this.studentService.findByName(this.firstName).subscribe( data => {
      this.students = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  confirmUpdate(student : Student){
    var status= confirm("You want to update this record?");
      if (status==true) {
        this.updateStudent(student.id);
      }
      else{
        this.getStudents();
      }
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }

  viewCourse(student: Student){
    console.log(student.standard);
    console.log(student.isLowerGrade);
    if(student.standard>=6 && student.standard<=10) {
      student.isLowerGrade = true;
      console.log('studentComponent if condition '+student.isLowerGrade);
      this.router.navigate(['courses',true]);
    }
    else{
      student.isLowerGrade = false;
      console.log("studentComponent else condition "+student.isLowerGrade);
      this.router.navigate(['courses',false]);
    }
  }

  fetchByStandard(grade:any){
    this.gradeValue = grade.target.value;
    console.log(this.gradeValue);
    this.studentService.findByStandard(this.gradeValue).subscribe(
      data => {
        this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}