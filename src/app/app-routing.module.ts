import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from 'src/app/wwwroot/admin/admin-landing/admin-landing.component';
import { LoginComponent } from 'src/app/wwwroot/login/login.component';
import { OverviewComponent } from 'src/app/wwwroot/admin/overview/overview.component';
import { PageNotFoundComponent } from 'src/app/wwwroot/shared/page-not-found/page-not-found.component'
import { RestockComponent } from 'src/app/wwwroot/admin/restock/restock.component';
import { DepositComponent } from 'src/app/wwwroot/user/deposit/deposit.component';
import { HistoryComponent } from 'src/app/wwwroot/user/history/history.component';
import { UserBalanceComponent } from 'src/app/wwwroot/user/user-balance/user-balance.component';
import { UserLandingComponent } from 'src/app/wwwroot/user/user-landing/user-landing.component';
import { WithdrawComponent } from 'src/app/wwwroot/user/withdraw/withdraw.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'user-landing',
        component: UserLandingComponent,
        children: [
            { path: 'user-history', component: HistoryComponent },
            { path: 'user-current', component: UserBalanceComponent },
            { path: 'user-deposit', component: DepositComponent },
            { path: 'user-withdrwal', component: WithdrawComponent },
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
        redirectTo: '/login',
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
