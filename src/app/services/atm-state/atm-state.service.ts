import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ICurrency } from 'src/app/interface/index.interface';
import { CurrencyType } from 'src/app/enum/currency-type.enum';
import { environment } from 'src/environments/environment';
import { env } from 'process';

@Injectable({
    providedIn: 'root'
})
export class AtmStateService {

    private _currentStock: ICurrency[] = [];
    private _currentStockSubject: ReplaySubject<ICurrency[]> = new ReplaySubject(1);

    constructor(
        private http: HttpClient
    ) {
        if (environment.production) {
            this._currentStock = [
                {
                    "id": "308c3c1e-aa37-4b20-ba54-36a471d9f76c",
                    "currencyType": "hundred",
                    "value": 100,
                    "count": 10
                },
                {
                    "id": "92833b43-b9fb-4e0f-b427-72f2943ca75c",
                    "currencyType": "fifty",
                    "value": 50,
                    "count": 10
                },
                {
                    "id": "79061de8-f47e-4213-8987-46dc9e02fd08",
                    "currencyType": "twenty",
                    "value": 20,
                    "count": 10
                },
                {
                    "id": "b8ecd733-c148-49d9-89b9-35abf5e59f38",
                    "currencyType": "ten",
                    "value": 10,
                    "count": 10
                },
                {
                    "id": "682d229c-3f91-4477-befa-32b0534f84a1",
                    "currencyType": "five",
                    "value": 5,
                    "count": 10
                },
                {
                    "id": "410ce3d9-df57-4167-b91f-3a239f013ead",
                    "currencyType": "two",
                    "value": 2,
                    "count": 5
                },
                {
                    "id": "243ffa1d-d81c-4b94-838d-71ed5bb8e3c2",
                    "currencyType": "dollar",
                    "value": 1,
                    "count": 10
                }
            ]
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
                    this.http.put(environment.baseUrl + 'atmstock/' + stock.id, stock).subscribe().unsubscribe();
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
        return this.http.get<ICurrency[]>(environment.baseUrl + 'atmstock')
            .pipe(
                tap((resp) => this._currentStock = resp),
                tap((resp) => this._currentStockSubject.next(resp))
            );
    }
}
