import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { ShowHideInput } from 'src/app/directives/show-hide-input.directive';
import { TransactionHistoryType } from 'src/app/enum/index.enum';
import { UserStateService } from 'src/app/services/user-state/user-state.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public userName: string = null;
    public password: string = null;
    public show: boolean = false;

    public loginForm: FormGroup;
    public loginSuccessFull: Boolean = null;

    @ViewChild(ShowHideInput) input: ShowHideInput;
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

    public toggleShow() {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
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
