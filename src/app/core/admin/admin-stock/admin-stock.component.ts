import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/user.interface';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-admin-stock',
    templateUrl: './admin-stock.component.html',
    styleUrls: ['./admin-stock.component.scss']
})
export class AdminStockComponent implements OnInit {

    public get CurrentUser(): Observable<IUser> { return this._userStateService.getCurrentUserObs(); }

    constructor(
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
    }

}
