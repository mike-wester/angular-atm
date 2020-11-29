import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/interface/index';
import { UserType } from 'src/enum/index';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: User = null;
    private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor() {

    }

    public getCurrentUser(): Observable<User> { return this._currentUserSubject.asObservable(); }

    public addStock(currencyType: CurrencyType, amount: number): boolean {
        this._currentStock[currencyType].count += amount;
        this._currentStockSubject.next(this._currentStock);
        return true;
    }

    public processWithdrawl(amount: number): boolean {

        var inventoryUsed: number[] = [];

        this._currentStock.forEach((currentCurrency: Currency, index: number) => {
            inventoryUsed.push(this.checkStock(amount, currentCurrency.value));
            amount -= inventoryUsed[index] * currentCurrency.value;
        });

        if (amount === 0) {
            this._currentStock.forEach((_, index: number) => {
                this._currentStock[index].count -= inventoryUsed[index];
            })

            return true;
        };

        return false;
    }

    private checkStock(totalAmount: number, processAmount: number): number {
        return Math.floor(totalAmount / processAmount);
    }
}
