import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EducationComponent } from './education/education.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'signup', component: SignupComponent},
  {path: 'courses/:lowerGrade', component: CoursesComponent,canActivate:[AuthGaurdService]},
  {path: 'contactus', component: ContactusComponent},
  {path: 'feedback', component: FeedbackComponent,canActivate:[AuthGaurdService]},
  {path: 'education', component: EducationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'students', component: StudentListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-student', component: CreateStudentComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent,canActivate:[AuthGaurdService]},
  {path: 'student-details/:id', component: StudentDetailsComponent,canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }