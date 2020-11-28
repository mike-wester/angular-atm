import { Component, OnInit } from '@angular/core';
import { AtmHistoryService } from 'src/services/atm-history/atm-history.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    constructor(
        public atmHistoryService: AtmHistoryService
    ) { }

    ngOnInit(): void {
    }

}
