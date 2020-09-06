import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Currency } from '../../interface/currency.interface';
import { CurrencyValue } from '../../enum/currency-value.enum';

@Injectable({
  providedIn: 'root'
})
export class AtmStateService {

  private _currentStock: Currency[] = [];
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

  public processWithdrawl(amount: number) : boolean {

    var hundreadsUsed = Math.floor(amount / 100);
    if(hundreadsUsed > this._currentStock[0].amount) {
      hundreadsUsed = this._currentStock[0].amount;
    }
    amount -= hundreadsUsed * 100;

    var fiftiesUsed = Math.floor(amount / 50);
    if(fiftiesUsed > this._currentStock[1].amount) {
      fiftiesUsed = this._currentStock[1].amount;
    }
    amount -= fiftiesUsed * 50;

    var twentiesUsed = Math.floor(amount / 20);
    if(twentiesUsed > this._currentStock[2].amount) {
      twentiesUsed = this._currentStock[2].amount;
    }
    amount -= twentiesUsed * 20;

    var fivesUsed = Math.floor(amount / 5);
    if(fivesUsed > this._currentStock[3].amount) {
      fivesUsed = this._currentStock[3].amount;
    }
    amount -= fivesUsed * 5;

    var dolalrsUsed = Math.floor(amount / 1);
    if(dolalrsUsed > this._currentStock[4].amount) {
      dolalrsUsed = this._currentStock[4].amount;
    }
    amount -= dolalrsUsed * 1;

    if(amount === 0) {
      this._currentStock[0].amount -= hundreadsUsed;
      this._currentStock[1].amount -= fiftiesUsed;
      this._currentStock[2].amount -= twentiesUsed;
      this._currentStock[3].amount -= fivesUsed;
      this._currentStock[4].amount -= dolalrsUsed;

      return true;
    }

    return false;
  }
}
