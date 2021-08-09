import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class AuthenticationService implements CanActivate{
    canActivate() {
        return confirm("Are You sure You want to access this page?");
    }


}










