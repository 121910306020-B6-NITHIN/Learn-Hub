import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  goto2(){
    this.router.navigate(["Add"]);
  }
  goto3(){
    this.router.navigate(["Show"]);
  }
}
