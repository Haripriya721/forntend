/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-marks-form',
  templateUrl: './marks-form.component.html',
  styleUrls: ['./marks-form.component.css']
})
export class MarksFormComponent implements OnInit {

  mark: any = {};

  constructor(private router: Router, private marksService: MarksService) { }

  ngOnInit(): void {
  }

  saveMark() {
    this.marksService.createMarks(this.mark).subscribe(() => {
      this.router.navigate(['/marks']);
    });
  }

}*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-marks-form',
  templateUrl: './marks-form.component.html',
  styleUrls: ['./marks-form.component.css']
})
export class MarksFormComponent implements OnInit {

  marks: any = {};
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private marksService: MarksService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const studentId = parseInt(idParam, 10); // Convert idParam to a number
      this.isEditMode = true;
      this.marksService.getMarksByStudentId(studentId).subscribe((data: any[]) => {
        // Assuming the service returns an array of marks for the student
        // You might need to adjust this based on the actual response structure
        this.marks = data; // Assuming you want to edit the first mark
      });
    }
  }

  saveMark() {
    if (this.isEditMode) {
      // Handle update logic
      this.marksService.updateMarks(this.marks.id, this.marks).subscribe(() => {
        // Navigate to the appropriate page after updating the mark
        this.router.navigate(['/marks']);
      });
    } else {
      this.marksService.createMarks(this.marks).subscribe(() => {
        // Navigate to the appropriate page after creating the mark
        this.router.navigate(['/marks']);
      });
    }
  }
}

