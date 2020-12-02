import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login/login.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { RestockComponent } from './admin/restock/restock.component';
import { TransactionHistoryComponent } from './admin/transaction-history/transaction-history.component';
import { UserLandingComponent } from './user/user-landing/user-landing.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';

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
        WithdrawComponent
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
