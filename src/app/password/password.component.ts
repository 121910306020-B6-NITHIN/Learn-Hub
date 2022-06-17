import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  myform!:FormGroup;
  mailid:any;
  data1:any;
  mail:any;
  qus:any;
  key:any;
  id:any;
  constructor(private _helperservics:HelperService,private route:Router,private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.mailid=this._helperservics.putmail()
    this.myform=this._fb.group({
      ans:''
    })
    this._helperservics.getDataByEmail(this.mailid).subscribe((data : any)=>{
      console.log(data);
      this.data1=data
      this.mail=this.data1[0].email
      this.qus=this.data1[0].qus
      this.key=this.data1[0].key
      this.id=this.data1[0]._id
    })
  }
  submit(){
    if(this.myform.value.ans == this.key){
      this.route.navigate(['/updatepassword/'+this.id])
    }
  }
  goto1(){
    this.route.navigate(['/Login'])
  }
  goto2(){
    this.route.navigate(['/SignUp'])
  }
}
