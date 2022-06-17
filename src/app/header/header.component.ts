import { LoginComponent } from './../login/login.component';
import { HelperService } from './../helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username:any;
  name:any;
  name2:any;
  isAdmin=false;
  constructor(private _helperService:HelperService,private login:LoginComponent,private router:Router) { }
  ngOnInit(): void {
    
    this.isAdmin=this._helperService.checkAdmin()
    // console.log(this._helperService.getName())
    this.name=this._helperService.getName()
    this.name2=this.name[0]
    // console.log(this.name2.fname)
    this.username=this.name2.fname
  }
  goto(){
    this.router.navigate(['Read'])

  }
  goto1(){
    this.router.navigate(['Show'])
  }
  goto2(){
    this.router.navigate(['Add'])
  }

  

}
