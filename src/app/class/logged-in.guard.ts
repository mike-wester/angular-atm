import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    constructor(private _userStateService: UserStateService) { };

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('this._userStateService', this._userStateService.getCurrentUser());
        if (this._userStateService.isLoggedIn()) {
            return true;
        } else {
            window.alert("You don't have permission to view this page");
            return false;
        }
    }
}
