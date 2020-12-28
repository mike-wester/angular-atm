import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';
import { CurrencyType, TransactionHistoryType } from 'src/app/enum/index.enum';
import { TransactionHistory } from 'src/app/class/transaction-history';

@Component({
    selector: 'app-deposit',
    templateUrl: './user-deposit.component.html',
    styleUrls: ['./user-deposit.component.scss']
})
export class UserDepositComponent implements OnInit {

    public depositForm: FormGroup;
    public depositSuccessFull: boolean = false;

    constructor(
        private atmHistoryService: AtmHistoryService,
        public atmStateService: AtmStateService,
        private userStateService: UserStateService
    ) { }

    ngOnInit(): void {
        this.depositForm = new FormGroup({
            amountDeposit: new FormControl(0, Validators.min(0)),
            amountHundread: new FormControl(0, Validators.min(0)),
            amountFifty: new FormControl(0, Validators.min(0)),
            amountTwenty: new FormControl(0, Validators.min(0)),
            amountTen: new FormControl(0, Validators.min(0)),
            amountFive: new FormControl(0, Validators.min(0)),
            amountTwo: new FormControl(0, Validators.min(0)),
            amountOne: new FormControl(0, Validators.min(0))
        });
    }

    public deposit(): void {
        if (this.validateDeposit()) {
            this.updateInventory();
            this.updateAccount();
            this.depositSuccessFull = true;
            this.logHistory();
            this.reset();
        } else {
            this.depositSuccessFull = false;
        }
    }

    private logHistory(): void {
        this.atmHistoryService.addHistory(new TransactionHistory({
            userId: this.userStateService.getCurrentUser().id,
            type: TransactionHistoryType[TransactionHistoryType.deposit],
            message: 'Amount deposited: ' + this.depositForm.controls['amountDeposit'].value + ' ' +
                'Hundreads deposited: ' + this.depositForm.controls['amountHundread'].value + ' ' +
                'Fifties deposited: ' + this.depositForm.controls['amountFifty'].value + ' ' +
                'Twenties deposited: ' + this.depositForm.controls['amountTwenty'].value + ' ' +
                'Tens deposited: ' + this.depositForm.controls['amountTen'].value + ' ' +
                'Fives deposited: ' + this.depositForm.controls['amountFive'].value + ' ' +
                'Twos deposited: ' + this.depositForm.controls['amountTwo'].value + ' ' +
                'Dolalrs deposited: ' + this.depositForm.controls['amountOne'].value
        }));
    }

    private reset(): void {
        this.depositForm.controls['amountHundread'].setValue(0);
        this.depositForm.controls['amountFifty'].setValue(0);
        this.depositForm.controls['amountTwenty'].setValue(0);
        this.depositForm.controls['amountTen'].setValue(0);
        this.depositForm.controls['amountFive'].setValue(0);
        this.depositForm.controls['amountTwo'].setValue(0);
        this.depositForm.controls['amountOne'].setValue(0);
    }

    private updateAccount(): void {
        this.userStateService.getCurrentUser().accountBalance += this.depositForm.controls['amountDeposit'].value
    }

    private updateInventory(): void {
        this.atmStateService.addStock(CurrencyType.hundread, this.depositForm.controls['amountHundread'].value);
        this.atmStateService.addStock(CurrencyType.fifty, this.depositForm.controls['amountFifty'].value);
        this.atmStateService.addStock(CurrencyType.twenty, this.depositForm.controls['amountTwenty'].value);
        this.atmStateService.addStock(CurrencyType.tens, this.depositForm.controls['amountTen'].value);
        this.atmStateService.addStock(CurrencyType.five, this.depositForm.controls['amountFive'].value);
        this.atmStateService.addStock(CurrencyType.two, this.depositForm.controls['amountTwo'].value);
        this.atmStateService.addStock(CurrencyType.dollar, this.depositForm.controls['amountOne'].value);
    }

    private validateDeposit(): boolean {
        let temp = this.depositForm.controls['amountHundread'].value * 100 +
            this.depositForm.controls['amountFifty'].value * 50 +
            this.depositForm.controls['amountTwenty'].value * 20 +
            this.depositForm.controls['amountTen'].value * 10 +
            this.depositForm.controls['amountFive'].value * 5 +
            this.depositForm.controls['amountTwo'].value * 2 +
            this.depositForm.controls['amountOne'].value * 1;

        return temp === this.depositForm.controls['amountDeposit'].value
    }
}
