import { Injectable } from '@angular/core';
import { Currency } from '../../interface/currency.interface';
import { CurrencyValue } from '../../enum/currency-value.enum';

@Injectable({
  providedIn: 'root'
})
export class AtmStateService {

  private _currentStock: Currency[] = [
    { value: CurrencyValue[CurrencyValue.hundread], display: 100, amount: 10 },
    { value: CurrencyValue[CurrencyValue.fifty], display: 50, amount: 10 },
    { value: CurrencyValue[CurrencyValue.twenty], display: 20, amount: 10 },
    { value: CurrencyValue[CurrencyValue.five], display: 5, amount: 10 },
    { value: CurrencyValue[CurrencyValue.dollar], display: 1, amount: 10 }
  ];

  public get currentStock(): Currency[] { return this._currentStock; } 

  constructor() { }
}
