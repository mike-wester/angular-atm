import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtmHistoryService } from 'src/app/services/atm-history/atm-history.service';
import { ShowHideInputDirective } from 'src/app/directives/show-hide-input.directive';
import { TransactionHistoryType, UserType } from 'src/app/enum/index.enum';
import { UserStateService } from 'src/app/services/user-state/user-state.service';
import { IUser } from 'src/app/interface/user.interface';
import { TransactionHistory } from 'src/app/class/transaction-history';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    private _currentUser: IUser;

    public loginForm: FormGroup;
    public password: string = null;
    public show: boolean = false;
    public userName: string = null;

    public get currentUser() { return this._currentUser };

    @ViewChild(ShowHideInputDirective) input: ShowHideInputDirective;
    constructor(
        private _atmHistoryService: AtmHistoryService,
        private _router: Router,
        private _userStateService: UserStateService
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
        this._currentUser = this._userStateService.processLogin(this.userName, this.password)

        this.logHistory();

        this.loginForm.controls['userName'].setValue(null);
        this.loginForm.controls['password'].setValue(null);

        if (!!this._currentUser) {
            this.processLoginRouting();
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
        this._atmHistoryService.addHistory(new TransactionHistory({
            userId: this._currentUser?.id,
            userType: this._currentUser?.userType,
            type: TransactionHistoryType[TransactionHistoryType.login],
            message: 'Attempt to Login of ' + this.userName + ((!!this._currentUser) ? ' was successful' : ' failed, invalid Username/Password')
        }));
    }

    private processLoginRouting(): void {
        switch (this._currentUser.userType) {
            case UserType.basic: {
                this._router.navigate(['user-landing']);
                break;
            }
            case UserType.admin: {
                this._router.navigate(['admin-landing']);
                break;
            }
            case UserType.super: {
                this._router.navigate(['super-landing']);
                break;
            }
        }
    }
}
