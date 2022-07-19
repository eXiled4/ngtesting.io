import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Basic2Component } from './basic2.component';

describe('Basic2Component', () => {
  let comp: Basic2Component;
  let fixture: ComponentFixture<Basic2Component>;
  let debugElement: DebugElement;
  let element: HTMLElement;

// beforeEach(() => {
//   TestBed.configureTestingModule({
//     declarations:[Basic2Component], //Declaring created component to be part of testing environment
//   })

//   fixture = TestBed.createComponent(Basic2Component);
//   //Note here we are calling for TestBed AGAIN - calling it synchronously even before Angular has a chance to compilation
//   // This synchronous task may be happening too fast esp if external resources are in play. This can be mitigated by implementing the async testing fx
//       //Async tesing fx breaks the beforeEach fx into two segments - one async call and one sync call
//   comp = fixture.componentInstance; //This here creates an instance of the component we can test on
//   debugElement = fixture.debugElement.query(By.css('p'))
//   element = debugElement.nativeElement
// //Potential issue here is when testing module is created, Angular checks all components a part 
// // Ergo it checks all external files - eg CSS files that may not be ready for testing
// // The act of reading this files a asynchronous in nature
// });


beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations:[Basic2Component]
  }).compileComponents
})
// In this syntax, all functions will be passed to async fx before each call
// All functions inside here will be performed in async manner
// Ergo we are configuring our testbed, testmodule using the configureTestingModule function
// When this returns we get our instance of TestBed, and allows us to chain more methods to the testbed
// Method being chained here is the compileComponents
// In summary, this testbed will look at declared components, find all external templates and files and handle compilation in async manner
    // When this method inside async fx is done, all external resources will be available, whereas performing this in a synchrounous manner wont achieve compiling everything
    // This async method will allow us to use all external files relating to the component, and enable to continue coding tests in sync manncer where
    // Everyting is available to us
    // Testing continues as below, compare to basic component for comparison async testing vs sync testing
);

beforeEach(() => {  
    fixture = TestBed.createComponent(Basic2Component);
    //Note here we are calling for TestBed AGAIN - calling it synchronously even before Angular has a chance to compilation
    // This synchronous task may be happening too fast esp if external resources are in play. This can be mitigated by implementing the async testing fx
        //Async tesing fx breaks the beforeEach fx into two segments - one async call and one sync call
    comp = fixture.componentInstance; //This here creates an instance of the component we can test on
    debugElement = fixture.debugElement.query(By.css('p'))
    element = debugElement.nativeElement
  //Potential issue here is when testing module is created, Angular checks all components a part 
  // Ergo it checks all external files - eg CSS files that may not be ready for testing
  // The act of reading this files a asynchronous in nature
  });

it('should show the name of Randys wife', () => {
  expect(element.textContent).not.toContain(comp.name)
  fixture.detectChanges();
  expect(element.textContent).toContain("Sharon")
})


})


// describe('Basic2Component', () => {
//   let component: Basic2Component;
//   let fixture: ComponentFixture<Basic2Component>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ Basic2Component ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(Basic2Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// }); - DEFAULT TEMPLATE
