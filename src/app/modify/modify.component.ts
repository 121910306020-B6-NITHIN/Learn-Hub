import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from './../helper.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  ObjectId:any;
  myForm!:FormGroup;
  

  constructor(private _fb:FormBuilder,private _helperService:HelperService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ObjectId=this.activatedRoute.snapshot.paramMap.get('id');
    this.myForm=this._fb.group({
      Name:'',
      Src:'',
      Dest:'',
      Content:'',
      Key:''
    })

    console.log(this.ObjectId);
    this._helperService.getDataById(this.ObjectId).subscribe((data:any)=>{
      console.log(data);
      this.myForm.setValue({
        Name:data[0]?.Name,
        Src:data[0]?.Src,
        Dest:data[0]?.Dest,
        Content:data[0]?.Content,
        Key:data[0]?.Key
      })

    })
    
  }
  Update1(){
    this._helperService.UpdateData(this.ObjectId,this.myForm.value).subscribe(data=>{
      console.log(data);
      alert('success');
      this.router.navigate(['Show']);
    })
  }

  Delete1(){
    this._helperService.deleteById(this.ObjectId).subscribe(data=>{
      alert('deleted data item');
      this.router.navigate(['Show']);
    })
  }
}
