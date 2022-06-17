import { __values } from 'tslib';
import { HelperService } from './../helper.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
import { Component, OnInit ,Injectable} from '@angular/core';
// import { HelperService } from '../helper.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id:any;
  pass:any;
  myform!:FormGroup;
  data1:any;
  name:any;
  arr=[]

  constructor(private router: Router,private _fb:FormBuilder,private _helperService:HelperService) {
   }

  ngOnInit(): void {
    this.data1=false;
    this.myform=this._fb.group({
      UserId:'',
      Password:''
    })

  }
  goto(){
    this.router.navigate(["SignUp"])
  }
  
  SignIn(){
    this.id=this.myform.value.UserId
    this.pass=this.myform.value.Password
    // this._helperService.setAdmin(this.myform.value)
    // this._helperService.checkAdmin()
    console.log(this.myform.value.UserId)
    this._helperService.getDataByEmail(this.id).subscribe(data=>{
      console.log(data);
      this.check(data)
      this.name=data
    console.log(this._helperService.setAdmin(this.name))//this.myform.value
    this._helperService.checkAdmin()
    this.show(data)
    this.auth(data)
    })
  }
  
  show(data:any){
    if(data[0].pwd == this.pass){
      this.data1=true     
    }
  }
  auth(data:any){
    if(data[0] && this.data1){
      this.router.navigate(['/Home']).then(()=>{

        window.location.reload()
    })
    }else{
      alert('invalid cred')
    }
  }
  goto1(){
    this._helperService.getMail(this.myform.value.UserId)
    this.router.navigate(['/Password'])
  }
  check(data:any){
    if(data.length==0){
      alert('!!No User Exist!! Please Create Account ')
    }
  }


}
