import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()


export class UserService{

    constructor(public http:HttpClient)
    {
        
    }

    public getUser()
    {
        let url='https://reqres.in/api/users?page=2';
        return this.http.get(url);
    }
    public getSingleUser(no:number)
    {
        let url='https://reqres.in/api/users/'+no;
        return this.http.get(url);
    }

}










