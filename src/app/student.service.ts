import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/studentDetails/backend/students";

  constructor(private httpClient: HttpClient) { }

  deleteAll():Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  
  findByName(name : any): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}?name=${name}`);
  }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }

  //localhost:4200/delete/5
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  findByStandard(grade : number): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}/findByStandard?grade=${grade}`);
  }
}