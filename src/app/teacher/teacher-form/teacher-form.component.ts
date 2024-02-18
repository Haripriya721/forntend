import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  teacher: any = {};
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    const teacherId = this.route.snapshot.paramMap.get('id');
    if (teacherId) {
      this.isEditMode = true;
      // Convert teacherId from string to number
      const id = +teacherId;
      this.teacherService.getTeacherById(id).subscribe((data: any) => {
        this.teacher = data;
      });
    }
  }
  

  saveTeacher() {
    if (this.isEditMode) {
      this.teacherService.updateTeacher(this.teacher.id, this.teacher).subscribe(() => {
        this.router.navigate(['/teachers']);
      });
    } else {
      this.teacherService.createTeacher(this.teacher).subscribe(() => {
        this.router.navigate(['/teachers']);
      });
    }
  }

}
