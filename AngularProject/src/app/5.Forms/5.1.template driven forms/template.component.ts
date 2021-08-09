import { Component } from '@angular/core'

@Component({
    selector:'temp-comp',
    templateUrl:'./template.component.html'

})

export class TemplateComponent{

    title:string='Template Driven Form !!'
    fullname:string="";
    city:string="";
    phone:string="";

    public SaveUser(data:any)
    {
        alert(JSON.stringify(data));
    }

}














