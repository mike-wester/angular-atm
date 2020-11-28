import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from 'src/services/atm-history/atm-history.service';
import { AtmStateService } from 'src/services/atm-state/atm-state.service';
import { TransactionHistoryType } from 'src/enum/transaction-history-type.enum';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public userName: string = null;
    public password: string = null;
    public loginForm: FormGroup;
    public loginSuccessFull: Boolean = null

    constructor(
        private atmHistoryService: AtmHistoryService,
        private atmStateService: AtmStateService
    ) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            userName: new FormControl(0, Validators.required),
            password: new FormControl(0, Validators.required)
        });
    }

    public processLogin(): void {
        this.userName = this.loginForm.controls['userName'].value;
        this.password = this.loginForm.controls['password'].value;
        //this.loginSuccessFull = this.atmStateService.processLogin(this.userName, this.password)
        this.logHistory();
        this.loginForm.controls['loginAmount'].setValue(0);
    }

    private logHistory(): void {
        this.atmHistoryService.addHistory({
            type: TransactionHistoryType[TransactionHistoryType.login],
            message: 'Attempt to Login of ' + this.userName + ((this.loginSuccessFull) ? ' was successful' : ' failed, invalid Username/Password Combination'),
            date: new Date()
        });
    }
}
