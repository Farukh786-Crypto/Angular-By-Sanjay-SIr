import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    selector:'model-app',
    templateUrl:'./modeldriven.component.html'
})

export class ModelDrivenComponent{
    title:string="Model Driven Form !!"
    studentModel:FormGroup;
    constructor(){
        this.studentModel=new FormGroup({
            name:new FormControl('',[Validators.required]), // first parameter is default value
            phone:new FormControl('',[Validators.required]),
            email:new FormControl('',[Validators.required])
        })
    }
    public saveInfo(data:any)
    {
        console.log(JSON.stringify(data));
    }
}





