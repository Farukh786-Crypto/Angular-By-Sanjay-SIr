import { Component } from "@angular/core";

@Component({
    selector:'bind-comp',
    templateUrl:'./binding.component.html'

})

export class BindingComponent{
    title:string='Binding component worked .'

    name:string='Farukh Shaikh';
    city:string='Pune';
    Phone:string='9730285635'


    public Show():void
    {
        alert(this.name + " " +this.city + " "+this.Phone);
    }

}







