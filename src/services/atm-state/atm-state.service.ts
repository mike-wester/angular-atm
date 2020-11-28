import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Currency } from '../../interface/currency.interface';
import { CurrencyValue } from '../../enum/currency-value.enum';

@Injectable({
    providedIn: 'root'
})
export class AtmStateService {

    private _currentStock: Currency[] = [];

    public _currentStockSubject: BehaviorSubject<Currency[]> = new BehaviorSubject(null);

    constructor() {
        this._currentStock = [
            { index: CurrencyValue[CurrencyValue.hundread], value: 100, count: 10 },
            { index: CurrencyValue[CurrencyValue.fifty], value: 50, count: 10 },
            { index: CurrencyValue[CurrencyValue.twenty], value: 20, count: 10 },
            { index: CurrencyValue[CurrencyValue.tens], value: 10, count: 10 },
            { index: CurrencyValue[CurrencyValue.five], value: 5, count: 10 },
            { index: CurrencyValue[CurrencyValue.two], value: 2, count: 10 },
            { index: CurrencyValue[CurrencyValue.dollar], value: 1, count: 10 }
        ];

        this._currentStockSubject.next(this._currentStock);
    }

    public getCurrentStock(): Observable<Currency[]> { return this._currentStockSubject.asObservable(); }

    public addStock(currencyValue: CurrencyValue, amount: number): boolean {
        this._currentStock[currencyValue].count += amount;
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
