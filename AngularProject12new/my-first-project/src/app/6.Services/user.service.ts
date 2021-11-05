import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()

export class UserServiceComp{

    constructor(private http:HttpClient){

    }
    public getUser(){
        let url="https://reqres.in/api/users?page=2"
        return this.http.get(url);
    }

}













