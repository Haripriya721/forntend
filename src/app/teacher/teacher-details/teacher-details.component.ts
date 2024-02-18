import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teacher: any;

  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit(): void {
    const teacherId = +this.route.snapshot.paramMap.get('id');
    this.teacherService.getTeacher(teacherId).subscribe((data: any) => {
      this.teacher = data;
    });
  }

}