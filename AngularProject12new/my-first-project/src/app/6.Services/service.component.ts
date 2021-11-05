import { Component } from '@angular/core'
import { StudentService } from './student.service'
import { UserServiceComp } from './user.service';

@Component({
    selector:'ser-comp',
    templateUrl:'./service.component.html',
    providers:[StudentService]
})

export class ServiceComponent{
    title:string='Service Component is Worked !!'
        studentInfo:any;
        userInfo:any;
        constructor(private stud:StudentService,private us:UserServiceComp){}

        // Function is called in html using button
        public getStudent(){
           this.studentInfo= this.stud.Details();
        }
        public getAllUser(){
            this.us.getUser().subscribe(res=>{this.userInfo=res},
                err=>{this.userInfo=err})
        }

}






