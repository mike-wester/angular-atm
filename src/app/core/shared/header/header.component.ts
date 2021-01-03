import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
