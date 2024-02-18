import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-marks-details',
  templateUrl: './marks-details.component.html',
  styleUrls: ['./marks-details.component.css']
})



  export class MarksDetailsComponent implements OnInit {

    marks: any;
  
    constructor(private route: ActivatedRoute, private marksService: MarksService) { }
  

      ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam !== null && idParam !== undefined) {
          const studentId = +idParam;
          this.marksService.getMarksByStudentId(studentId).subscribe((data: any) => {
            this.marks = data;
          });
        }
        
    }
  
  }