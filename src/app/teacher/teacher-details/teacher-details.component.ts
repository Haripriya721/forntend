import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teacher: any;

  constructor(private route: ActivatedRoute, private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    let idParam: string | null = this.route.snapshot.paramMap.get('id');
    if (idParam !== null && idParam !== undefined) {
      const teacherId = +idParam;
      this.teacherService.getTeacherById(teacherId).subscribe((data: any) => {
        this.teacher = data;
      });
    } else {
      console.error('No teacher ID provided.');
    }
  }

  goBack() {
    this.router.navigate(['/teachers']);
  }

}
