import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICurrency } from 'src/app/interface/index.interface';
import { CurrencyType } from 'src/app/enum/currency-type.enum';

@Injectable({
    providedIn: 'root'
})
export class AtmStateService {

    private _currentStock: ICurrency[] = [];
    private _currentStockSubject: BehaviorSubject<ICurrency[]> = new BehaviorSubject(null);

    constructor() {
        this._currentStock = [
            { index: CurrencyType[CurrencyType.hundred], value: 100, count: 100 },
            { index: CurrencyType[CurrencyType.fifty], value: 50, count: 100 },
            { index: CurrencyType[CurrencyType.twenty], value: 20, count: 200 },
            { index: CurrencyType[CurrencyType.tens], value: 10, count: 200 },
            { index: CurrencyType[CurrencyType.five], value: 5, count: 50 },
            { index: CurrencyType[CurrencyType.two], value: 2, count: 5 },
            { index: CurrencyType[CurrencyType.dollar], value: 1, count: 1000 }
        ];

        this._currentStockSubject.next(this._currentStock);
    }

    public getCurrentStock(): Observable<ICurrency[]> { return this._currentStockSubject.asObservable(); }

    public addStock(currencyType: CurrencyType, amount: number): boolean {
        this._currentStock[currencyType].count += amount;
        this._currentStockSubject.next(this._currentStock);
        return true;
    }

    public processWithdrawal(amount: number): boolean {

        var inventoryUsed: number[] = [];

        this._currentStock.forEach((currentCurrency: ICurrency, index: number) => {
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
