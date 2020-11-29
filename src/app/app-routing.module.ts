import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from 'src/app/admin/admin-landing/admin-landing.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { OverviewComponent } from 'src/app/admin/overview/overview.component';
import { RestockComponent } from 'src/app/admin/restock/restock.component';
import { WithdrawComponent } from 'src/app/user/withdraw/withdraw.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin-landing',
        component: AdminLandingComponent,
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
        redirectTo: '/login',
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
