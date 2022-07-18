import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BasicComponent } from './basic.component';

// describe('BasicComponent', () => {
//   let component: BasicComponent;
//   let fixture: ComponentFixture<BasicComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ BasicComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(BasicComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });            THIS IS THE DEFAULT TEST CODE FROM COMPONENT CREATION


// Example basic test written below
describe('BasicComponent, (template)', () => {

  let comp: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  // ComponentFixture is Fixture for debugging and testing a component.

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[BasicComponent],
    });
    // Here we configure testing module to check the basiccomponent

    fixture = TestBed.createComponent(BasicComponent);
    // Here we create a testing environment for basic component - using comp wont work
    // Fixture will give access to the actual component via the componentInstance method
    // Also gives access to the debugElement
    comp = fixture.componentInstance;
    // componentInstance - The instance of the root component class
    debugElement = fixture.debugElement.query(By.css('p'))
      // this line directs the debugElement function to ONLY debug the p element

    element = debugElement.nativeElement
    // nativeElement - the underlying DOM element at the root component

  });

  // Below is the first test written! - 
  it("should contain a name", () => {
    expect(element.textContent).not.toContain(comp.name);
    // This line above states that UNTIL the data binding has occurred, the value from name inside component should not be shown
    fixture.detectChanges();
    // In production change detection and binding happens automatically  - not in testing!
    // This is why we call fixture.detectChanges() - tells ng to perform initial bindings - then in next line
    // we state our expectations
    expect(element.textContent).toContain(comp.name);
    // In this expectation, that after the initial binding of the element - the text context - will contain (toContain) the value of
    // the main variable in the controller (we initialised the value to Randy in basic.component.ts)
  })

  it("will have the name Stan", () => {
    comp.name = "Stan";

    fixture.detectChanges();

    expect(element.textContent).toContain("Stan")
// This example is similiar to what was written above, testing out the binding function by subbing it for own name value 'stan
  });

  it("name will now become Shelly", () => {
    comp.name = "Shelly";
    fixture.detectChanges();
    expect(element.textContent).toContain("Shelly")
  });

});

// To begin writing custom tests, ensure testbed (as above after creating component) has been imported