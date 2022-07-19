import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic2',
  templateUrl: './basic2.component.html',
  styleUrls: ['./basic2.component.css']
})
export class Basic2Component implements OnInit {

  name = "Sharon"

  constructor() { }

  ngOnInit(): void {
  }

}
