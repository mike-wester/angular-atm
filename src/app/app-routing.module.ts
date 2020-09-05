import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestockComponent } from './restock/restock.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
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
        component: DashboardComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }