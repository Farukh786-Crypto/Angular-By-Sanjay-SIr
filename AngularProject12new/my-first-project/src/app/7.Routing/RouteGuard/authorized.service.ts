import { Injectable } from "@angular/core";
import { CanActivateChild} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class AuthorizeClass implements CanActivateChild{
    canActivateChild():any{
        return confirm("Are you sure You want Access the child Component?");
    }

}




