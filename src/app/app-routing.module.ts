import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHistoryComponent, AdminLandingComponent, AdminRestockComponent, AdminStockComponent } from 'src/app/core/admin/index.admin-components';
import { LoggedInGuard } from 'src/app/class/logged-in.guard';
import { LoginComponent } from 'src/app/core/login/login.component';
import { PageNotFoundComponent } from 'src/app/core/shared/page-not-found/page-not-found.component'
import { SuperHistoryComponent, SuperLandingComponent, SuperNewUserComponent, SuperRestockComponent, SuperStockComponent } from 'src/app/core/super/index.super-components';
import { UserBalanceComponent, UserDepositComponent, UserHistoryComponent, UserLandingComponent, UserWithdrawComponent } from 'src/app/core/user/index.user-components';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'user-landing',
        component: UserLandingComponent,
        canActivate: [LoggedInGuard],
        children: [
            { path: 'user-balance', component: UserBalanceComponent },
            { path: 'user-deposit', component: UserDepositComponent },
            { path: 'user-history', component: UserHistoryComponent },
            { path: 'user-withdrawal', component: UserWithdrawComponent },
            { path: '', redirectTo: 'user-balance', pathMatch: 'full' }
        ]
    },
    {
        path: 'admin-landing',
        component: AdminLandingComponent,
        canActivate: [LoggedInGuard],
        children: [
            { path: 'admin-history', component: AdminHistoryComponent },
            { path: 'admin-restock', component: AdminRestockComponent },
            { path: 'admin-stock', component: AdminStockComponent },
            { path: '', redirectTo: 'admin-stock', pathMatch: 'full' }
        ]
    },
    {
        path: 'super-landing',
        component: SuperLandingComponent,
        canActivate: [LoggedInGuard],
        children: [
            { path: 'super-history', component: SuperHistoryComponent },
            { path: 'super-new-user', component: SuperNewUserComponent },
            { path: 'super-restock', component: SuperRestockComponent },
            { path: 'super-stock', component: SuperStockComponent },
            { path: '', redirectTo: 'super-stock', pathMatch: 'full' }
        ]
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
