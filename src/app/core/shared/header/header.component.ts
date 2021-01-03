import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionHistory } from 'src/app/class/transaction-history';
import { TransactionHistoryType, UserType } from 'src/app/enum/index.enum';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _router: Router,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void { }

    public logoutUser(): void {
        this.logHistory();

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

    private logHistory(): void {
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: this._userStateService?.getCurrentUser()?.id,
            userType: this._userStateService?.getCurrentUser()?.userType,
            type: TransactionHistoryType[TransactionHistoryType.login],
            message: 'Attempt to Logoff of ' + this._userStateService?.getCurrentUser()?.firstName + ((!!this._userStateService?.getCurrentUser()) ? ' was successful' : ' failed, invalid Username/Password')
        }));
    }

}
