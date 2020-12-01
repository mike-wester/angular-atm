import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmHistoryService } from 'src/services/atm-history/atm-history.service';
import { TransactionHistoryType } from 'src/enum/index.enum';
import { UserStateService } from 'src/services/user-state/user-state.service';

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
        private router: Router,
        private userStateService: UserStateService
    ) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            userName: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    public processLogin(): void {
        this.userName = this.loginForm.controls['userName'].value;
        this.password = this.loginForm.controls['password'].value;
        this.loginSuccessFull = this.userStateService.processLogin(this.userName, this.password)

        this.logHistory();

        this.loginForm.controls['userName'].setValue(null);
        this.loginForm.controls['password'].setValue(null);

        if (this.loginSuccessFull) {
            this.loginSuccessFull = null;
            this.router.navigate(['admin-landing']);
        }
    }

    private logHistory(): void {
        this.atmHistoryService.addHistory({
            type: TransactionHistoryType[TransactionHistoryType.login],
            message: 'Attempt to Login of ' + this.userName + ((this.loginSuccessFull) ? ' was successful' : ' failed, invalid Username/Password Combination'),
            date: new Date()
        });
    }
}
