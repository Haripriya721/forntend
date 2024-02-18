import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: any = {};
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const studentId = +idParam;
      this.studentService.getStudentById(studentId).subscribe((data: any) => {
        this.student = data;
      });
    } else {
      // Handle the case when idParam is null
      console.error('No student ID provided.');
    }
  }
  

  saveStudent() {
    if (this.isEditMode) {
      this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    } else {
      this.studentService.createStudent(this.student).subscribe(() => {
        this.router.navigate(['/students']);
      });
    }
  }

}
