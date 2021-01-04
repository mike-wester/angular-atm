import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';
import { IUser } from 'src/app/interface/index.interface';
import { CurrencyType, TransactionHistoryType } from 'src/app/enum/index.enum';
import { TransactionHistory } from 'src/app/class/transaction-history';

@Component({
    selector: 'app-restock-inventory',
    templateUrl: './restock-inventory.component.html',
    styleUrls: ['./restock-inventory.component.scss']
})
export class RestockInventoryComponent implements OnInit {

    // HOW DO I GET THIS TO LOOP BETTER!

    public depositForm: FormGroup;
    public depositSuccessFull: boolean = false;

    public get atmStateService(): AtmStateService { return this._atmStateService };

    constructor(
        protected _atmHistoryService: AtmHistoryService,
        protected _atmStateService: AtmStateService,
        protected _userStateService: UserStateService
    ) {
        this.depositForm = new FormGroup({
            amountDeposit: new FormControl(0, Validators.min(0)),
            amountHundred: new FormControl(0, Validators.min(0)),
            amountFifty: new FormControl(0, Validators.min(0)),
            amountTwenty: new FormControl(0, Validators.min(0)),
            amountTen: new FormControl(0, Validators.min(0)),
            amountFive: new FormControl(0, Validators.min(0)),
            amountTwo: new FormControl(0, Validators.min(0)),
            amountOne: new FormControl(0, Validators.min(0))
        });
    }

    ngOnInit(): void { }

    public deposit(): void {
        this.depositSuccessFull = this.validateDeposit();
        if (this.depositSuccessFull) {
            this.updateInventory();
        }

        this.logHistory();
        this.reset();
    }

    protected logHistory(): void {
        let tempUser: IUser = this._userStateService.getCurrentUser();
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: tempUser?.id,
            userType: tempUser?.userType,
            type: TransactionHistoryType[TransactionHistoryType.deposit],
            message: 'Restock ' + (this.depositSuccessFull ? 'Success' : 'Fail') + ' ' +
                'Amount deposited: ' + this.depositForm.controls['amountDeposit'].value + ' ' +
                'Hundred deposited: ' + this.depositForm.controls['amountHundred'].value + ' ' +
                'Fifties deposited: ' + this.depositForm.controls['amountFifty'].value + ' ' +
                'Twenties deposited: ' + this.depositForm.controls['amountTwenty'].value + ' ' +
                'Tens deposited: ' + this.depositForm.controls['amountTen'].value + ' ' +
                'Fives deposited: ' + this.depositForm.controls['amountFive'].value + ' ' +
                'Twos deposited: ' + this.depositForm.controls['amountTwo'].value + ' ' +
                'Dollars deposited: ' + this.depositForm.controls['amountOne'].value
        }));
    }

    protected reset(): void {
        this.depositForm.reset({ amountDeposit: 0, amountHundred: 0, amountFifty: 0, amountTwenty: 0, amountTen: 0, amountFive: 0, amountTwo: 0, amountOne: 0 });
    }

    protected updateInventory(): void {
        this._atmStateService.addStock(CurrencyType.hundred, this.depositForm.controls['amountHundred'].value);
        this._atmStateService.addStock(CurrencyType.fifty, this.depositForm.controls['amountFifty'].value);
        this._atmStateService.addStock(CurrencyType.twenty, this.depositForm.controls['amountTwenty'].value);
        this._atmStateService.addStock(CurrencyType.tens, this.depositForm.controls['amountTen'].value);
        this._atmStateService.addStock(CurrencyType.five, this.depositForm.controls['amountFive'].value);
        this._atmStateService.addStock(CurrencyType.two, this.depositForm.controls['amountTwo'].value);
        this._atmStateService.addStock(CurrencyType.dollar, this.depositForm.controls['amountOne'].value);
    }

    protected validateDeposit(): boolean {
        let temp = this.depositForm.controls['amountHundred'].value * 100 +
            this.depositForm.controls['amountFifty'].value * 50 +
            this.depositForm.controls['amountTwenty'].value * 20 +
            this.depositForm.controls['amountTen'].value * 10 +
            this.depositForm.controls['amountFive'].value * 5 +
            this.depositForm.controls['amountTwo'].value * 2 +
            this.depositForm.controls['amountOne'].value * 1;

        return temp === this.depositForm.controls['amountDeposit'].value
    }
}
