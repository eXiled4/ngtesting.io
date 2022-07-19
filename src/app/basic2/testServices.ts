// // CODE 1

// import { Injectable } from '@angular/core';

// import { FoodItem } from '../models/food1tem';

// @Injectable()

// export ckass FoodService {
// constructor() { }

// dummyFoodList:FoodItem [] = [...

// ]

// getFavFood():FoodItem{
// return new FoodItem(1,"apple","fruit","red and crunchy","1 small apple","g",77,0,1,21);

// getFood(id):FoodItem{...

// }

// getGroups():Array<string>{...

// }

// getGroups_promise():Promise<string [] > {...

// }

// }

 

// // CODE 2

// import { Component, OnInit } from '@angular/core';

// import { FoodService } from '../services/food.service';

// import { FoodItem } from '../models/foodItem';

// @Component({, selector: 'app-simple2',

// templateUrl: './simple2.component.html',

// styleUrIs: [ './simple2.component.css' ]

// })

// export class Simple2Component implements OnInit {

// favFood:FoodItem;

// foods:FoodItem [];

// constructor(private foodService:FoodService) { }

// ngOnInit() {

// this.favFood = this.foodService.getFavFood();

// }

// }

 

// // CODE 3

// <ul>

// <p class="foodName"> food name: {{favFood.name}} </p>

// <p *ngIf="favFood.description"> description: {{favFood.description}} </p>

// </ul>

 

// // CODE 4

// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { By } from '@angular/platform-browser';

// import { DebugEIement } from '@angular/core';, import { Simple2Component } from './simple2.component';

// import { FoodService } from '../services/food.service';

// import { FoodItem } from '../models/foodItem';

// describe('Simple2Component'. () => {

// let component: Simple2Component;

// let fixture: ComponentFixture<Simple2Component>;

// let foodService;

// let foodServiceStub = {

// getFavFood: function(){

// return {

// name: "Kale",

// description: 'Leafy and green'

// };

// }

// }

// let debugElement:DebugElement;

// let element:HTMLElement;

// beforeEach(async(() => {

// TestBed.configureTestingModule({

// declarations: [Simple2Component],

// providers: [{provide: FoodService, useVaIue: foodServiceStub } ]

// })

// .compileComponents();

// }));

// beforeEach(() => {

// fixture = TestBed.createComponent(Simple2Component);

// foodservice = fixture.debugElement.injector.get(FoodService);

// component = fixture.componentInstance;

// debugElement = fixture.debugElement.query(By.css('.foodName'));

// element = debugElement.nativeElement;

// fixture.detectChanges();

// });

// it('should create', () => {

// expect(component).toBeTruthy();

// });

// it('should create', () => {

// expect(component).toBeTruthy();

// });

// it('should use food service stub', () => {

// console.log(foodService.getFavFood());

// expect( foodService.getFavFood().name ).toBe("Kale");

// expect( foodService.getFavFood().description ).toBe("Leafy and green");

// expect ( element.textContent ).toContain("Kale");

// });