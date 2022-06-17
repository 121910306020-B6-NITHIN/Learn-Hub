import { UpdateComponent } from './../update/update.component';
import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  python:any;
  webdev:any;
  frmwk:any;
  upcmg:any
  data:any;
  data1:any;
  data2:any;
  data3:any;
  constructor(private _helperService:HelperService) { }

  ngOnInit(): void {
    this.python="python";
    this.webdev="webdev";
    this.frmwk="frameworks";
    this.upcmg="upcoming"
    
    // console.log(this.python)
    this._helperService.getDataName(this.python).subscribe(data=>{
      // console.log(data)
      this.data=data
    })
    this._helperService.getDataName(this.webdev).subscribe(data=>{
      // console.log(data)
      this.data1=data
    })
    this._helperService.getDataName(this.frmwk).subscribe(data=>{
      // console.log(data)
      this.data2=data
  })
    this._helperService.getDataName(this.upcmg).subscribe(data=>{
      // console.log(data)
      this.data3=data
})


}}
