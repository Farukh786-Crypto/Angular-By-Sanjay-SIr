import { Injectable } from '@angular/core'

@Injectable() // without this ur code run if u have httpClient depedency then used it

export class StudentService{
    student:any=[
        {name:'sai' , city:'pune'},
        {name:'Ganesh' , city:'Nashik'}
    ]

    public Details(){
        return this.student;
    }
}







