import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksService } from '../marks.service';

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
    this.marksService.createMark(this.mark).subscribe(() => {
      this.router.navigate(['/marks']);
    });
  }

}
