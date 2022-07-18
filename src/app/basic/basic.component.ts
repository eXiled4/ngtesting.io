import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  name = "Randy";


  constructor() { }

  ngOnInit(): void {
  }

}

// Change detection works differently in testing environment compared to a production environment