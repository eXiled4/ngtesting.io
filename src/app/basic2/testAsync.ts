// EXAMPLE CODE OF ASYNC PROMISE THAT RETURNS AN ARRAY

import { TestBed } from "@angular/core/testing"

getFoods_promise():Promise<FoodItems[]>{
    const foodsURL = "http link here"

    return this.http.get(foodsURL)                           //IS AN OBSERVABLE OBJECT
    .toPromise()                                             //CONVERTED TO PROMISE VIA RXJS toPromise()
    .then( response => response.json() as FoodItem() )       //PARSE RESULT OF CALL TO A JSON ARRAYOF FOOD ITEMS
    .catch(this.handleError)                                 //PREPARES TO HANDLE ERROR CALLS
}

private handleError(error: any) Promise<any> {
    return Promise.reject(error.message || error);
}

// Using a spy to intercept asynchronous calls and provide a known response. LINE 34

// In the beforeEach fx is where the spy fx goes

beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule],     //IMPORT MODULES GOES HERE EG HttpModule
        declarations:[SimpleComponent],    //COMPONENT NAMES GOES HERE
        providers:[FoodService], //SERVICES GOES HERE (name.service.ts files)
    })

    // ** NOTE BELOW ARE FROM DECLARED VARIABLES **
    fixture = TestBed.createComponent(SimpleComponent)
    component = fixtureComponent
    foodService = fixture.debugElement.injector.get(FoodService) //We use to injector to ADD the service do they have access to the variables

    spy = spyOn(foodService, 'getFoods_promise').and.returnValue(Promise.resolves(testFood))

    ...    
// })

// In the actual tests after coding for setup has been achieved - 

//  Remember if we don't signal for any binding by using the detectChanges method, our paragraph should not yet contain the food's name
//      We can use spy syntax to 

it('should not show food name before onInit', () =>{ 
    expect(element.textContent).not.toContain("testFood"); //Should not contain binded values as fixture.detectChanges not called yet
    expect(spy.calls.any()).toBe(false, 'getFoods_promise not yet called');, }) //Spy fx not used yet because no binding has occurred

    // when fixture.detectChanges has been used, that means the component would have attempted once to use the getFoods_promise ergo spy function would have executed


    it('should not show food after promise returned (async)', async( () =>{
         fixture.detectChanges();                  //initial binding
         fixture.whenStable().then(()=>{        //whenStable waits for async PROMISE to come back
            fixture.detectChanges();            //performs view binding with promise returned
                expect(element.textContent).toContain("testFood"); })




//THIS TEST BELOW 
            //Writing test in async manner but written simpler in a way 
            //  we dont have to write code requiring us to wait
            //  and then responds to promise explicitly

    it('should show food name after promise returned (fakeAsync)', fakeAsync( () =>{ 
        fixture.detectChanges(); //initial binding  
        tick(); //the tick method, used in conjunc with the fakeAsynC fx, jumps forward in time when the promise is resolved
                //tick method allow us to continue with writing tests in a more readable synchronous manner
                //Ergo instead of calling whenStable - we can call tick() once instead and continue writing code
                //as if other tests after this is synchronous
            fixture.detectChanges(); 
            expect(element.textContent).toContain("testFood"); 
        })