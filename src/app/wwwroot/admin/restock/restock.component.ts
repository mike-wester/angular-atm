import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { CurrencyType, TransactionHistoryType } from 'src/app/enum/index.enum';

@Component({
    selector: 'app-restock',
    templateUrl: './restock.component.html',
    styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

    public restockForm: FormGroup;
    public restockSuccessFull: boolean = false;

    constructor(
        private atmHistoryService: AtmHistoryService,
        public atmStateService: AtmStateService
    ) { }

    ngOnInit(): void {
        this.restockForm = new FormGroup({
            amountHundread: new FormControl(0, Validators.min(0)),
            amountFifty: new FormControl(0, Validators.min(0)),
            amountTwenty: new FormControl(0, Validators.min(0)),
            amountTen: new FormControl(0, Validators.min(0)),
            amountFive: new FormControl(0, Validators.min(0)),
            amountTwo: new FormControl(0, Validators.min(0)),
            amountOne: new FormControl(0, Validators.min(0))
        });
    }

    public restock(): void {
        this.updateInventory();
        this.restockSuccessFull = true;
        this.logHistory();
        this.reset();
    }

    private logHistory(): void {
        this.atmHistoryService.addHistory({
            type: TransactionHistoryType[TransactionHistoryType.restock],
            message: 'Hundreads restocked: ' + this.restockForm.controls['amountHundread'].value + ' ' +
                'Fifties restocked: ' + this.restockForm.controls['amountFifty'].value + ' ' +
                'Twenties restocked: ' + this.restockForm.controls['amountTwenty'].value + ' ' +
                'Tens restocked: ' + this.restockForm.controls['amountTen'].value + ' ' +
                'Fives restocked: ' + this.restockForm.controls['amountFive'].value + ' ' +
                'Twos restocked: ' + this.restockForm.controls['amountTwo'].value + ' ' +
                'Dolalrs restocked: ' + this.restockForm.controls['amountOne'].value,
            date: new Date()
        });
    }

    private reset(): void {
        this.restockForm.controls['amountHundread'].setValue(0);
        this.restockForm.controls['amountFifty'].setValue(0);
        this.restockForm.controls['amountTwenty'].setValue(0);
        this.restockForm.controls['amountTen'].setValue(0);
        this.restockForm.controls['amountFive'].setValue(0);
        this.restockForm.controls['amountTwo'].setValue(0);
        this.restockForm.controls['amountOne'].setValue(0);
    }

    private updateInventory(): void {
        this.atmStateService.addStock(CurrencyType.hundread, this.restockForm.controls['amountHundread'].value);
        this.atmStateService.addStock(CurrencyType.fifty, this.restockForm.controls['amountFifty'].value);
        this.atmStateService.addStock(CurrencyType.twenty, this.restockForm.controls['amountTwenty'].value);
        this.atmStateService.addStock(CurrencyType.tens, this.restockForm.controls['amountTen'].value);
        this.atmStateService.addStock(CurrencyType.five, this.restockForm.controls['amountFive'].value);
        this.atmStateService.addStock(CurrencyType.two, this.restockForm.controls['amountTwo'].value);
        this.atmStateService.addStock(CurrencyType.dollar, this.restockForm.controls['amountOne'].value);
    }
}
