import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from 'src/app/interface/index.interface';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';

@Component({
    selector: 'app-current-inventory',
    templateUrl: './current-inventory.component.html',
    styleUrls: ['./current-inventory.component.scss']
})
export class CurrentInventoryComponent implements OnInit {

    public get currentStock(): Observable<ICurrency[]> { return this._atmStateService.getCurrentStock(); }

    constructor(
        private _atmStateService: AtmStateService
    ) { }

    ngOnInit(): void { }

}
