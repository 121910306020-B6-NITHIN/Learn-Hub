import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl:'./show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  dataSource:any;
  displayedColumns:string[]=['_id','Name','Src','Dest','Content','Key'];


  constructor(private _helperService:HelperService) { }

  ngOnInit(): void {
    this._helperService.getData().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
    })
  }

}
