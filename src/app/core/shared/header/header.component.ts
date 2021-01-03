import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/enum/index.enum';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private _router: Router,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void { }

    public logoutUser(): void {
        if (this._userStateService.processLogout()) {
            this._router.navigate(['login']);
        }
    }

    public logoUser(): void {
        switch (this._userStateService.getCurrentUser()?.userType) {
            case UserType.basic:
                this._router.navigate(['user-landing']);
                break;
            case UserType.admin:
                this._router.navigate(['admin-landing']);
                break;
            case UserType.super:
                this._router.navigate(['super-landing']);
                break;
            default:
                this._router.navigate(['login']);
        }
    }

}
