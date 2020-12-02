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
import { RestockComponent } from './wwwroot/admin/restock/restock.component';
import { TransactionHistoryComponent } from './wwwroot/admin/transaction-history/transaction-history.component';
import { UserLandingComponent } from './wwwroot/user/user-landing/user-landing.component';
import { WithdrawComponent } from './wwwroot/user/withdraw/withdraw.component';
import { ShowHideInput } from './directives/show-hide-input.directive';

@NgModule({
    declarations: [
        AdminLandingComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        OverviewComponent,
        RestockComponent,
        TransactionHistoryComponent,
        UserLandingComponent,
        WithdrawComponent,
        ShowHideInput
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
