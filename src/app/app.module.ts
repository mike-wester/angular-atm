import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLandingComponent } from './wwwroot/admin/admin-landing/admin-landing.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './wwwroot/shared/footer/footer.component';
import { HeaderComponent } from './wwwroot/shared/header/header.component';
import { LoginComponent } from './wwwroot/login/login.component';
import { OverviewComponent } from './wwwroot/admin/overview/overview.component';
import { PageNotFoundComponent } from './wwwroot/shared/page-not-found/page-not-found.component';
import { RestockComponent } from './wwwroot/admin/restock/restock.component';
import { ShowHideInput } from './directives/show-hide-input.directive';
import { TransactionHistoryComponent } from './wwwroot/admin/transaction-history/transaction-history.component';
import { UserBalanceComponent } from './wwwroot/user/user-balance/user-balance.component';
import { UserDepositComponent } from './wwwroot/user/user-deposit/user-deposit.component';
import { UserHistoryComponent } from './wwwroot/user/user-history/user-history.component';
import { UserLandingComponent } from './wwwroot/user/user-landing/user-landing.component';
import { UserWithdrawComponent } from './wwwroot/user/user-withdraw/user-withdraw.component';

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
