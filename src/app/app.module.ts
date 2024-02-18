import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module'; // Import your AppRoutingModule here
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { MarksFormComponent } from './marks/marks-form/marks-form.component';

import { AppComponent } from './app.component';




@NgModule({
    declarations: [
      AppComponent,
      StudentFormComponent,
      TeacherFormComponent,
      MarksFormComponent
    ],
    imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
