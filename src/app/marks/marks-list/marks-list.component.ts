import { Component, OnInit } from '@angular/core';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-list',
  templateUrl: './marks-list.component.html',
  styleUrls: ['./marks-list.component.css']
})
export class MarksListComponent implements OnInit {

  marks: any[];

  constructor(private marksService: MarksService) { }

  ngOnInit(): void {
    this.marksService.getAllMarks().subscribe((data: any[]) => {
      this.marks = data;
    });
  }

  deleteMark(markId: number) {
    this.marksService.deleteMark(markId).subscribe(() => {
      // Remove the deleted mark from the list
      this.marks = this.marks.filter(mark => mark.id !== markId);
    });
  }

}
