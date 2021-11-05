import { Component } from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
    selector:'model-form',
    templateUrl:'./modeldriven.component.html'
})

export class ModelDrivenComp{
    title:string='Model Driven Form'
    loginModel:any;
    
    constructor(){
        this.loginModel=new FormGroup({
            name:new FormControl('',[Validators.required]),
            city:new FormControl('',[Validators.required])
        })
    }

    public SubmitData(data:any){
        console.log(JSON.stringify(data));
    }
}



