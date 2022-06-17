import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from './../helper.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  myform!:FormGroup
  btnName:any


  constructor(private _fb:FormBuilder,private _helperService:HelperService , private router:Router) {}
  ngOnInit(): void {
    this._helperService.getUsers().subscribe(data=>{
      console.log(data);
    })
    this.myform=this._fb.group({
      fname:['',Validators.required],
      pwd:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      lname:['',Validators.required],
      ads:['',Validators.required],
      city:['',Validators.required],
      qus:['',Validators.required],
      key:['',Validators.required],
    }) 
  }

  submit(){
    this._helperService.postNewUser(this.myform.value).subscribe(data=>{
      console.log(data);
      if(data==false){
        alert('account  exist')
      }else{
        alert('account created')
      }
      
    })
    this.router.navigate(['Login'])
  }
  goto(){
    this.router.navigate(['Login'])
  }
  // fnameChanged(){
  //   this.btnName=this.myform.controls['fname'].value

  // }
}

