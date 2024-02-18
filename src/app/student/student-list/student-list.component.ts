import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  //students: any[];
  students: any[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      // Remove the deleted student from the list
      this.students = this.students.filter(student => student.id !== studentId);
    });
  }

  goToStudentDetails(studentId: number) {
    this.router.navigate(['/students', studentId]);
  }

  goToAddStudent() {
    this.router.navigate(['/students/add']);
  }

}
