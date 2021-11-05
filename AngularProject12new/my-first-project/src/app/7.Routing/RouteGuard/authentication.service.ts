import { Injectable } from "@angular/core";
import {CanActivate} from "@angular/router";

@Injectable()

export class AuthenticationService implements CanActivate{
    canActivate():boolean{
        return confirm("Are you sure you want to access this page?");
    }

}
