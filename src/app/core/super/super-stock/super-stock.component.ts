import { Component, OnInit } from '@angular/core';

import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-super-stock',
    templateUrl: './super-stock.component.html',
    styleUrls: ['./super-stock.component.scss']
})
export class SuperStockComponent implements OnInit {

    public get atmStateService(): AtmStateService { return this._atmStateService; }
    public get userStateService(): UserStateService { return this._userStateService; }

    constructor(
        private _atmStateService: AtmStateService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
    }

}
