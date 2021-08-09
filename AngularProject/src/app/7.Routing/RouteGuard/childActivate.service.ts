import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class activateService implements CanActivateChild{
    canActivateChild(){
        return confirm("Are you sure to go to this page ?");
    }


}









