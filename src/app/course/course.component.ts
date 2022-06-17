import { __values } from 'tslib';
import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(private _helperService:HelperService) { }
  dataSource:any;
  ngOnInit(): void {
    this._helperService.getData().subscribe(data=>{
      console.log(data)
      this.dataSource=data
      
      })

  }
}
