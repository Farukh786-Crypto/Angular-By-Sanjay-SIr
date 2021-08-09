import { Component } from '@angular/core'

@Component({
    selector:'pipe-comp',
    templateUrl:'./pipe.component.html'
})

export class PipeComponent{
    title:string='Pipe component is Worked !!';

    name:string='Farukh Shaikh';
    todaydate:Date=new Date();

    amount:number=100;

    student:any={ name:'Farukh' , city:'Pune' }

    // custom pipes
    no:number=5;

    public Show():void
    {
        alert(JSON.stringify(this.student))
    }

}









