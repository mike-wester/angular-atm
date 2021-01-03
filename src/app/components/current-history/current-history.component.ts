import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/index.interface';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-current-history',
    templateUrl: './current-history.component.html',
    styleUrls: ['./current-history.component.scss']
})
export class CurrentHistoryComponent implements OnInit {

    public get CurrentUser(): Observable<IUser> { return this._userStateService.getCurrentUserObs(); }
    public transactionHistory(user: IUser): any { return this._atmHistoryService.getUserTransactionHistoryUserType(user); }

    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
    }

}
