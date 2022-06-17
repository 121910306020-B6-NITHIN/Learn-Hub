import { HelperService } from './../helper.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  myForm!:FormGroup

  constructor(private _fb:FormBuilder,private _helperService:HelperService,private router:Router){ }
  
  ngOnInit(): void {
    this._helperService.getData().subscribe(data=>{
      console.log(data);

    })
    this.myForm=this._fb.group({
      Name:['',Validators.required],
      Src:['',Validators.required],
      Dest:['',Validators.required],
      Content:['',Validators.required],
      Key:['']
    })
  }
  submit(){
    this._helperService.PostContent(this.myForm.value).subscribe(data=>{
      console.log(data);
      alert('inserted')
      this.router.navigate(['Add']).then(()=>{
        window.location.reload()
      })

    })
  }

}
