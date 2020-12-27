import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from 'src/app/wwwroot/admin/admin-landing/admin-landing.component';
import { LoginComponent } from 'src/app/wwwroot/login/login.component';
import { OverviewComponent } from 'src/app/wwwroot/admin/overview/overview.component';
import { PageNotFoundComponent } from 'src/app/wwwroot/shared/page-not-found/page-not-found.component'
import { RestockComponent } from 'src/app/wwwroot/admin/restock/restock.component';
import { UserBalanceComponent } from 'src/app/wwwroot/user/user-balance/user-balance.component';
import { UserDepositComponent } from 'src/app/wwwroot/user/user-deposit/user-deposit.component';
import { UserHistoryComponent } from 'src/app/wwwroot/user/user-history/user-history.component';
import { UserLandingComponent } from 'src/app/wwwroot/user/user-landing/user-landing.component';
import { UserWithdrawComponent } from 'src/app/wwwroot/user/user-withdraw/user-withdraw.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'user-landing',
        component: UserLandingComponent,
        children: [
            { path: 'user-balance', component: UserBalanceComponent },
            { path: 'user-deposit', component: UserDepositComponent },
            { path: 'user-history', component: UserHistoryComponent },
            { path: 'user-withdrwal', component: UserWithdrawComponent },
            { path: '', redirectTo: 'user-balance', pathMatch: 'full' },
        ]
    },
    {
        path: 'admin-landing',
        component: AdminLandingComponent
    },
    {
        path: 'super-landing',
        component: AdminLandingComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'restock',
        component: RestockComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
