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

    public withdrawalAmount: number = 0;
    public withdrawForm: FormGroup;
    public withdrawalSuccessFull: Boolean = null

    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _atmStateService: AtmStateService,
        private _userStateService: UserStateService
    ) { }

    ngOnInit(): void {
        this.withdrawForm = new FormGroup({
            withdrawalAmount: new FormControl([Validators.min(1), Validators.required])
        });
    }

    public processWithdrawal(): void {
        this.withdrawalAmount = this.withdrawForm.controls['withdrawalAmount'].value;
        this.withdrawalSuccessFull = this._userStateService.withdrawalPossible(this.withdrawalAmount);
        if (this.withdrawalSuccessFull) {
            this.withdrawalSuccessFull = this._atmStateService.processWithdrawal(this.withdrawalAmount);
            if (this.withdrawalSuccessFull) {
                this._userStateService.processWithdrawal(this.withdrawalAmount)
            }
        }
        this.logHistory();
        this.withdrawForm.controls['withdrawalAmount'].setValue(null);
    }

    private logHistory(): void {
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: this._userStateService.getCurrentUser()?.id,
            type: TransactionHistoryType[TransactionHistoryType.withdrawal],
            message: 'Attempt to Withdraw of ' + this.withdrawalAmount + ((this.withdrawalSuccessFull) ? ' was a success' : ' failed, insufficient funds')
        }));
    }
}
