import { Component } from '@angular/core'
import { StudentService } from './student.service'
import { UserService } from './user.service';

@Component({
    selector:'service-app',
    templateUrl:'./service.component.html',
    providers:[StudentService,UserService]
})

export class StudentServiceComponent{
    title:string=' Student Service Component is Worked !!'
    studInfo:any;
    userInfo:any;
    singleuser:any;
    userId:number=0;
    constructor(private stud:StudentService,private us:UserService)
    {
        
    }

    public getAllStudent()
    {
      this.studInfo =  this.stud.getStudentDetails();
    } 
    public getAllUser()
    {
        this.us.getUser().subscribe(res=>{this.userInfo=res},
            err=>{this.userInfo=err})
    }

    public GetSingleUser()
    {
        this.us.getSingleUser(this.userId).subscribe(
            res=>{this.singleuser=res},
            err=>{this.singleuser=err}
        );
    }
}













