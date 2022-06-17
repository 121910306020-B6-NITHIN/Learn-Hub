import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
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
      alert('success');
      this.router.navigate(['Read']);
    })

  }
  Delete(){
    this._helperService.deleteUserById(this.ObjectId).subscribe(data=>{
      // alert('deleted');
      this.router.navigate(['Read']);
    })
  }
  goto(){
    this.router.navigate(['/Login'])
  }

}
