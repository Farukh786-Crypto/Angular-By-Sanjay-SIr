import { Component } from '@angular/core'

@Component({
    selector:'app-parent',
    templateUrl:'./Parent.component.html'
})

export class ParentComponent{
    title:string='Parent Component is Worked !!!'

    myname:string='I am Assimilate Technologies !!'

    childTitle:string='';
    public getInfo(data:any){
            this.childTitle=data;
            alert(data);
    }

}














