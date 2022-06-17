import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  dataSource:any;
  displayedColumns:string[]=['_id','fname','lname','email','city','pwd','ads','qus','key'];
  constructor(private _helperService:HelperService) {

   }

  ngOnInit(): void {
    this._helperService.getUsers().subscribe(data=>{
      console.log(data);
      this.dataSource=data;
    })
  }

}
