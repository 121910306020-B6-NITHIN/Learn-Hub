import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goto1(){
    this.router.navigate(["Read"]);
  }
}
