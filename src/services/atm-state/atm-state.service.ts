import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Currency } from '../../interface/currency.interface';
import { CurrencyValue } from '../../enum/currency-value.enum';

@Injectable({
  providedIn: 'root'
})
export class AtmStateService {

  private _currentStock: Currency[];
  private _behaviorSubject: BehaviorSubject<Currency[]> = new BehaviorSubject(null);

  constructor() { 
    this._currentStock = [
      { value: CurrencyValue[CurrencyValue.hundread], display: 100, amount: 10 },
      { value: CurrencyValue[CurrencyValue.fifty], display: 50, amount: 10 },
      { value: CurrencyValue[CurrencyValue.twenty], display: 20, amount: 10 },
      { value: CurrencyValue[CurrencyValue.five], display: 5, amount: 10 },
      { value: CurrencyValue[CurrencyValue.dollar], display: 1, amount: 10 }
    ];

    this._behaviorSubject.next(this._currentStock);
  }

  public getCurrentStock(): Observable<Currency[]> { return this._behaviorSubject.asObservable(); } 

  public addStock(currencyValue: CurrencyValue, amount: number): boolean {
    this._currentStock[currencyValue].amount += amount;
    this._behaviorSubject.next(this._currentStock);
    return true;
  }
}
