import { Component, Input,Output,EventEmitter } from '@angular/core'

@Component({
    selector:'child-comp',
    templateUrl:'./Child.component.html'
})

export class ChildComponent{
    title:string=' Child component Worked !! '
    // parent to child
   @Input() name1:string='I am Farukh Shaikh'

   // child to parent
   @Output() send:EventEmitter<any>=new EventEmitter<any>();

   student:any={name:'Farukh',city:'pune'};
   public sendData(){
       this.send.emit(this.student);
   }

}