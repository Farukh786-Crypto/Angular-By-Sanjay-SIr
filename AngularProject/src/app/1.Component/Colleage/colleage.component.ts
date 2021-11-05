//  step 1 : Adds component dependencies
import { Component } from '@angular/core'

//  step 2: Add component decorator
// step 3: inside decorator Add metadata
@Component({
    selector:'coll-comp',    // placeholder of component
    // template:'<h1>Hello</h1>'    -- for multiline used backtick symbol
    templateUrl:'./colleage.component.html', // display on Browser
    styleUrls:['./colleage.component.css']

})

// step 4: Export class
export class ColleageComponent{
    title:string='Colleage Component is Worked !!'
}






