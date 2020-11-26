import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from 'src/app/admin/overview/overview.component';
import { DashboardComponent } from 'src/app/shared/dashboard/dashboard.component';
import { RestockComponent } from 'src/app/admin/restock/restock.component';
import { WithdrawComponent } from 'src/app/user/withdraw/withdraw.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: 'restock',
        component: RestockComponent,
    },
    {
        path: 'withdraw',
        component: WithdrawComponent,
    },
    { 
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
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