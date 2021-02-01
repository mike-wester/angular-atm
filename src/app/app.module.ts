import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminHistoryComponent } from './core/admin/admin-history/admin-history.component';
import { AdminLandingComponent } from './core/admin/admin-landing/admin-landing.component';
import { AdminRestockComponent } from './core/admin/admin-restock/admin-restock.component';
import { AdminStockComponent } from './core/admin/admin-stock/admin-stock.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrentInventoryComponent } from './components/current-inventory/current-inventory.component';
import { CurrentHistoryComponent } from './components/current-history/current-history.component';
import { FooterComponent } from './core/shared/footer/footer.component';
import { HeaderComponent } from './core/shared/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/shared/page-not-found/page-not-found.component';
import { ShowHideInputDirective } from './directives/show-hide-input.directive';
import { UserBalanceComponent } from './core/user/user-balance/user-balance.component';
import { UserDepositComponent } from './core/user/user-deposit/user-deposit.component';
import { UserHistoryComponent } from './core/user/user-history/user-history.component';
import { UserLandingComponent } from './core/user/user-landing/user-landing.component';
import { UserWithdrawComponent } from './core/user/user-withdraw/user-withdraw.component';
import { RestockInventoryComponent } from './components/restock-inventory/restock-inventory.component';
import { SuperLandingComponent } from './core/super/super-landing/super-landing.component';
import { SuperHistoryComponent } from './core/super/super-history/super-history.component';
import { SuperNewUserComponent } from './core/super/super-new-user/super-new-user.component';
import { SuperRestockComponent } from './core/super/super-restock/super-restock.component';
import { SuperStockComponent } from './core/super/super-stock/super-stock.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
    declarations: [
        AdminHistoryComponent,
        AdminLandingComponent,
        AdminRestockComponent,
        AdminStockComponent,
        AppComponent,
        CurrentInventoryComponent,
        CurrentHistoryComponent,
        FooterComponent,
        HeaderComponent,
        LoginComponent,
        PageNotFoundComponent,
        ShowHideInputDirective,
        UserBalanceComponent,
        UserDepositComponent,
        UserHistoryComponent,
        UserLandingComponent,
        UserWithdrawComponent,
        RestockInventoryComponent,
        SuperLandingComponent,
        SuperHistoryComponent,
        SuperNewUserComponent,
        SuperRestockComponent,
        SuperStockComponent,
        NewUserComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
