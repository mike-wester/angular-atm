import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLandingComponent } from './core/admin/admin-landing/admin-landing.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './core/shared/footer/footer.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { OverviewComponent } from './core/admin/overview/overview.component';
import { PageNotFoundComponent } from './core/shared/page-not-found/page-not-found.component';
import { RestockComponent } from './core/admin/restock/restock.component';
import { ShowHideInput } from './directives/show-hide-input.directive';
import { TransactionHistoryComponent } from './core/admin/transaction-history/transaction-history.component';
import { UserBalanceComponent } from './core/user/user-balance/user-balance.component';
import { UserDepositComponent } from './core/user/user-deposit/user-deposit.component';
import { UserHistoryComponent } from './core/user/user-history/user-history.component';
import { UserLandingComponent } from './core/user/user-landing/user-landing.component';
import { UserWithdrawComponent } from './core/user/user-withdraw/user-withdraw.component';

@NgModule({
    declarations: [
        AdminLandingComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        OverviewComponent,
        PageNotFoundComponent,
        RestockComponent,
        ShowHideInput,
        TransactionHistoryComponent,
        UserBalanceComponent,
        UserDepositComponent,
        UserHistoryComponent,
        UserLandingComponent,
        UserWithdrawComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
