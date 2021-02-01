import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/app/services/atm-state/atm-state.service';
import { UserStateService } from 'src/app/services/user-state/user-state.service';
import { IUser } from 'src/app/interface/index.interface';
import { UserType, TransactionHistoryType } from 'src/app/enum/index.enum';
import { TransactionHistory } from 'src/app/class/transaction-history';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

    public newUserForm: FormGroup;
    public UserType = UserType;

    constructor(
        protected _atmHistoryService: AtmHistoryService,
        protected _atmStateService: AtmStateService,
        protected _userStateService: UserStateService
    ) {
        this.newUserForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            userType: new FormControl(null, Validators.required),
            accountBalance: new FormControl(null, [Validators.min(0), Validators.max(200000)])
        });
    }

    ngOnInit(): void { }

    public addUser(): void {
        this.logHistory();
        this.reset();
    }

    protected logHistory(): void {
        let tempUser: IUser = this._userStateService.getCurrentUser();
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: tempUser?.id,
            userType: tempUser?.userType,
            type: TransactionHistoryType[TransactionHistoryType.newUser],
            message: 'WHAT WHAT'
        }));
    }

    protected reset(): void {
        this.newUserForm.reset({
            username: null,
            password: null,
            firstName: null,
            lastName: null
        });
    }
}
