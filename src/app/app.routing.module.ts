import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherDetailsComponent } from './teacher/teacher-details/teacher-details.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { MarksListComponent } from './marks/marks-list/marks-list.component';
import { MarksDetailsComponent } from './marks/marks-details/marks-details.component';
import { MarksFormComponent } from './marks/marks-form/marks-form.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'students/:id/edit', component: StudentFormComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'teachers/add', component: TeacherFormComponent },
  { path: 'teachers/:id', component: TeacherDetailsComponent },
  { path: 'teachers/:id/edit', component: TeacherFormComponent },
  { path: 'marks', component: MarksListComponent },
  { path: 'marks/add', component: MarksFormComponent },
  { path: 'marks/:id', component: MarksDetailsComponent },
  { path: 'marks/:id/edit', component: MarksFormComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', redirectTo: '/students', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
