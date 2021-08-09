import { Component, Input , Output,EventEmitter } from '@angular/core'

@Component({
    selector:'app-child',
    templateUrl:'./Child.component.html'
})

export class ChildComponent{
    title:string='Child Component is Worked !!!'

    // input is used to send data parent to child
    @Input() name:string='I am Farukh shaikh !!'

    @Output() send:EventEmitter<any>=new EventEmitter();

    student:any={name:'Farukh',city:'pune'};
    public sendData(){
        this.send.emit(this.student);
    }

}