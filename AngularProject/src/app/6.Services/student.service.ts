import { Injectable } from '@angular/core'

@Injectable()

export class StudentService{

    public student:any=[{ name:'Sai' , city:'Pune' } , {name:'Ganesh' , city:'Nashik'}  ]
    
    public getStudentDetails()
    {
        return this.student;
    }

}








