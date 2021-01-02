import { Component, OnInit } from '@angular/core';

import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-admin-stock',
    templateUrl: './admin-stock.component.html',
    styleUrls: ['./admin-stock.component.scss']
})
export class AdminStockComponent implements OnInit {

    public get atmStateService(): AtmStateService { return this._atmStateService; }
    public get userStateService(): UserStateService { return this._userStateService; }

    constructor(
        private _atmStateService: AtmStateService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
    }

}
