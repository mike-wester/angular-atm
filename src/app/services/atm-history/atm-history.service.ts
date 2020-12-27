import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TransactionHistory } from 'src/app/class/transaction-history';

@Injectable({
    providedIn: 'root'
})
export class AtmHistoryService {

    private _transactionHistory: TransactionHistory[] = [];
    private _transactionHistorySubject: BehaviorSubject<TransactionHistory[]> = new BehaviorSubject(null);

    constructor(
    ) { }

    public getTransactionHistory = (): Observable<TransactionHistory[]> => this._transactionHistorySubject.asObservable();
    public getUserTransactionHistory = (userId: string): TransactionHistory[] => this._transactionHistory.filter((t: TransactionHistory) => t.userId === userId);

    public addHistory(transactionHistory: TransactionHistory): boolean {
        this._transactionHistory.push(transactionHistory);
        this._transactionHistorySubject.next(this._transactionHistory);

        return true;
    }
}
