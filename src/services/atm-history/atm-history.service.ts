import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransactionHistory } from '../../interface/transaction-history';

@Injectable({
  providedIn: 'root'
})
export class AtmHistoryService {

  private _transactionHistory: TransactionHistory[] = [];
  private _behaviorSubject: BehaviorSubject<TransactionHistory[]> = new BehaviorSubject(null);

  constructor() { }

  public getTransactionHistory(): Observable<TransactionHistory[]> { return this._behaviorSubject.asObservable(); } 

  public addHistory(transactionHistory: TransactionHistory): boolean {
    this._transactionHistory.push(transactionHistory);
    this._behaviorSubject.next(this._transactionHistory);
    return true;
  }
}
