import { Component } from '@angular/core'

@Component({
    selector:'dir-comp',
    templateUrl:'./directive.component.html'
})

export class DirectivesComponent{
    title:string='Directives component is worked !!!'

    name:string='I am Farukh';
    MyColor:any ={color:'red'};
    isHidden:boolean=false;

    isHide:boolean=true;
    num:any=[1,2,3,4,5];
    student:any=[
        {name:'Farukh' , lastname:'Shaikh' , City:'Pune'} ,
        {name:'Farukh' , lastname:'Shaikh' , City:'Pune'} ,
        {name:'Farukh' , lastname:'Shaikh' , City:'Pune'}
    ]
}







