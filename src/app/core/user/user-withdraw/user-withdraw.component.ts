import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { TransactionHistoryType } from 'src/app/enum/transaction-history-type.enum';
import { UserStateService } from 'src/app/services/user-state/user-state.service';
import { TransactionHistory } from 'src/app/class/transaction-history';

@Component({
    selector: 'app-withdraw',
    templateUrl: './user-withdraw.component.html',
    styleUrls: ['./user-withdraw.component.scss']
})
export class UserWithdrawComponent implements OnInit {

    public withdrawlAmount: number = 0;
    public withdrawForm: FormGroup;
    public withdrawlSuccessFull: Boolean = null

    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _atmStateService: AtmStateService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
        this.withdrawForm = new FormGroup({
            withdrawlAmount: new FormControl([Validators.min(1), Validators.required])
        });
    }

    public processWithdrawl(): void {
        this.withdrawlAmount = this.withdrawForm.controls['withdrawlAmount'].value;
        this.withdrawlSuccessFull = this._userStateService.withdrawlPossible(this.withdrawlAmount);
        if (this.withdrawlSuccessFull) {
            this.withdrawlSuccessFull = this._atmStateService.processWithdrawl(this.withdrawlAmount);
            if (this.withdrawlSuccessFull) {
                this._userStateService.processWithdrawl(this.withdrawlAmount)
            }
        }
        this.logHistory();
        this.withdrawForm.controls['withdrawlAmount'].setValue(null);
    }

    private logHistory(): void {
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: this._userStateService.getCurrentUser()?.id,
            type: TransactionHistoryType[TransactionHistoryType.withdrawl],
            message: 'Attempt to Withdraw of ' + this.withdrawlAmount + ((this.withdrawlSuccessFull) ? ' was a success' : ' failed, insufficient funds')
        }));
    }
}
