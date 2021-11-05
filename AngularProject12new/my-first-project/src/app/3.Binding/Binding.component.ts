import { Component } from '@angular/core'

@Component({
    selector:'bind-comp',
    templateUrl:'./Binding.component.html'
})

export class BindingComponent{
    title:string='Binding Component is Worked !!'

    name:string='Farukh Shaikh'
    city:string='pune'
    phone:string='9309819859'

    public SaveData(){
            alert(this.name +" "+this.city+" "+this.phone);
    }

}












