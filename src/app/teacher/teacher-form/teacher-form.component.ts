import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  teacher: any = {};

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  saveTeacher() {
    this.teacherService.createTeacher(this.teacher).subscribe(() => {
      this.router.navigate(['/teachers']);
    });
  }

}
