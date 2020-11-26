import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { RestockComponent } from './admin/restock/restock.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login/login.component';
import { UserLandingComponent } from './user/user-landing/user-landing.component';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { TransactionHistoryComponent } from './admin/transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WithdrawComponent,
    RestockComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserLandingComponent,
    AdminLandingComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
