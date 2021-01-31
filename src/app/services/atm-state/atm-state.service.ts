import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ICurrency } from 'src/app/interface/index.interface';
import { CurrencyType } from 'src/app/enum/currency-type.enum';
import { environment } from 'src/environments/environment';

// Mock data
import currentStock from 'src/mockdata/currentStock.json';

@Injectable({
    providedIn: 'root'
})
export class AtmStateService {

    private _currentStock: ICurrency[] = [];
    private _currentStockSubject: ReplaySubject<ICurrency[]> = new ReplaySubject(1);

    constructor(
        private http: HttpClient
    ) {
        if (environment.useMockData) {
            this._currentStock = currentStock;
            this._currentStockSubject.next(this._currentStock)
        } else {
            this.loadCurrentStock().subscribe();
        }
    }

    public getCurrentStock(): Observable<ICurrency[]> { return this._currentStockSubject.asObservable(); }

    public addStock(currencyType: CurrencyType, amount: number): boolean {
        this._currentStock[currencyType].count += amount;
        this._currentStockSubject.next(this._currentStock);
        return true;
    }

    public processWithdrawal(amount: number): boolean {

        let inventoryUsed: number[] = [];

        this._currentStock.forEach((currentCurrency: ICurrency, index: number) => {

            inventoryUsed.push(this.checkStock(amount, currentCurrency));
            amount -= inventoryUsed[index] * currentCurrency.value;
        });

        if (amount === 0) {
            this._currentStock.forEach((stock, index: number) => {
                stock.count -= inventoryUsed[index];
                if (!environment.production) {
                    this.http.put(environment.baseMockUrl + 'atmstock/' + stock.id, stock).subscribe().unsubscribe();
                }
            })

            this.loadCurrentStock();
            return true;
        };

        return false;
    }

    private checkStock(totalAmount: number, processAmount: ICurrency): number {
        return Math.min(Math.floor(totalAmount / processAmount.value), processAmount.count);
    }

    private loadCurrentStock(): Observable<ICurrency[]> {
        return this.http.get<ICurrency[]>(environment.baseMockUrl + 'atmstock')
            .pipe(
                tap((resp) => this._currentStock = resp),
                tap((resp) => this._currentStockSubject.next(resp))
            );
    }
}
