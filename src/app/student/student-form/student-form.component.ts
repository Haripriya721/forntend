import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: any = {};

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }

}
