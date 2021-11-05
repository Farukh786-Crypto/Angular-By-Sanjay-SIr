import { Component } from '@angular/core'

@Component({
    selector:'parent-comp',
    templateUrl:'./Parent.component.html'
})

export class ParentComponent{
    title:string='Parent component is worked !!';
    myname:string='I am Assimilate Technology'

    childtitle:string='';
    public getInfo(data:any){
        this.childtitle=data;
        alert(data);
    }

}




