import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoute } from 'src/app/enum/index.enum';

@Component({
    selector: 'app-user-landing',
    templateUrl: './user-landing.component.html',
    styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent implements OnInit {

    constructor(
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    public routeToChild(route: String): void {
        switch (route) {
            case UserRoute[UserRoute.history]: {
                this._router.navigate(['user-history']);
                break;
            }
            case UserRoute[UserRoute.current]: {
                this._router.navigate(['user-current']);
                break;
            }
            case UserRoute[UserRoute.deposit]: {
                this._router.navigate(['user-deposit']);
                break;
            }
            case UserRoute[UserRoute.withdrawl]: {
                this._router.navigate(['user-withdrwal']);
                break;
            }
        }
    }

}
