import { Injectable } from '@angular/core';
import { Currency } from '../../interface/currency.interface';
import { CurrencyValue } from '../../enum/currency-value.enum';

@Injectable({
  providedIn: 'root'
})
export class AtmStateService {

  private _currentStock: Currency[] = [
    { value: CurrencyValue[CurrencyValue.hundread], amount: 10 },
    { value: CurrencyValue[CurrencyValue.fifty], amount: 10 },
    { value: CurrencyValue[CurrencyValue.twenty], amount: 10 },
    { value: CurrencyValue[CurrencyValue.five], amount: 10 },
    { value: CurrencyValue[CurrencyValue.dollar], amount: 10 }
  ];

  public get currentStock(): Currency[] { return this._currentStock; } 

  constructor() { }
}
