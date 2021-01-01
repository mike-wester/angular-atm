import { Component, OnInit } from '@angular/core';

import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-super-history',
    templateUrl: './super-history.component.html',
    styleUrls: ['./super-history.component.scss']
})
export class SuperHistoryComponent implements OnInit {

    public get atmHistoryService(): AtmHistoryService { return this._atmHistoryService; }
    public get userStateService(): UserStateService { return this._userStateService; }

    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
    }

}
