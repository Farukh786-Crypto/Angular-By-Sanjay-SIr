import { Component } from '@angular/core'

@Component({
    selector:'pipe-comp',
    templateUrl:'./Pipe.component.html'
})

export class PipeComponent{
    title:string='Pipe Component Worked !'

    name:string='Farukh Shaikh' 

    todayDate:Date=new Date();
    amount:number=100;

    student:any={ name:'Farukh' , city:'pune' }

    no:number=5;

}







