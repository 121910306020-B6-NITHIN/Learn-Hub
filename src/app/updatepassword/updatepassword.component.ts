import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss']
})
export class UpdatepasswordComponent implements OnInit {
  ObjectId : any;
  myform !: FormGroup;

  constructor(private activatedRoute:ActivatedRoute , private _helperService:HelperService, private _fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.ObjectId=this.activatedRoute.snapshot.paramMap.get('id');
    this.myform=this._fb.group({
      fname:'',
      lname:'',
      pwd:'',
      email:'',
      ads:'',
      city:'',
      qus:'',
      key:''
    })
    
    console.log(this.ObjectId)

    this._helperService.getUserById(this.ObjectId).subscribe((data : any)=>{
      console.log(data);
      this.myform.setValue({
        fname:data[0]?.fname,
        lname:data[0]?.lname,
        email:data[0]?.email,
        pwd:data[0]?.pwd,
        ads:data[0]?.ads,
        city:data[0]?.city,
        qus:data[0]?.qus,
        key:data[0]?.key
      })
    })
  }
  Update(){
    this._helperService.UpdateUserData(this.ObjectId,this.myform.value).subscribe(data=>{
      console.log(data);
      alert('Password Updated !Please Login');
      this.router.navigate(['Login']);
    })

  }
  Delete(){
    this._helperService.deleteUserById(this.ObjectId).subscribe(data=>{
      // alert('deleted');
      this.router.navigate(['Login']);
    })
  }
  goto(){
    this.router.navigate(['/Login'])
  }

}
