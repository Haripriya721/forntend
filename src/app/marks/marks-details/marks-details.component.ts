import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarksService } from '../marks.service';

@Component({
  selector: 'app-marks-details',
  templateUrl: './marks-details.component.html',
  styleUrls: ['./marks-details.component.css']
})
export class MarksDetailsComponent implements OnInit {

  mark: any;

  constructor(private route: ActivatedRoute, private marksService: MarksService) { }

  ngOnInit(): void {
    const markId = +this.route.snapshot.paramMap.get('id');
    this.marksService.getMark(markId).subscribe((data: any) => {
      this.mark = data;
    });
  }

}
