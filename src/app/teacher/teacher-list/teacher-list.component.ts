import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: any[] = []; // Initialize the property here

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((data: any[]) => {
      this.teachers = data;
    });
  }

  deleteTeacher(teacherId: number) {
    this.teacherService.deleteTeacher(teacherId).subscribe(() => {
      // Remove the deleted teacher from the list
      this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
    });
  }

  goToTeacherDetails(teacherId: number) {
    this.router.navigate(['/teachers', teacherId]);
  }

  goToAddTeacher() {
    this.router.navigate(['/teachers/add']);
  }

}
