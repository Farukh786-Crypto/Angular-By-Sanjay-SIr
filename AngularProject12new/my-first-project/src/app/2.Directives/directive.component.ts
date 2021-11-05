import { Component } from '@angular/core'

@Component({
    selector:'dir-comp',
    templateUrl:'./directive.component.html'
})

export class DirectivesComponent{
    title:string='Directives Component is Working !!';
    name:string='Farukh Shaikh'
    mycolor:any={color:'red'}
    isHidden:boolean=false;


    isHide:boolean=true;
    num:any=[3,6,8,3,6,7];

    student:any=[
        {name:'Farukh' , lastname:'Shaikh'},
        {name:'Fs' , lastname:'Sh'}
    ]

}














