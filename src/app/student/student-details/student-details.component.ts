import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

 /* ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const studentId = +idParam;
      this.studentService.getStudent(studentId).subscribe((data: any) => {
        this.student = data;
      });
    }
  }*/

  /*ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }*/
//Component to display details of a specific student.
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const studentId = +idParam;
      this.studentService.getStudentById(studentId).subscribe((data: any) => {
        this.student = data;
      });
    }
  }



}
