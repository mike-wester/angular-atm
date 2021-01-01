import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { TransactionHistory } from 'src/app/class/transaction-history';
import { IUser } from 'src/app/interface/index.interface';
import { UserType } from 'src/app/enum/index.enum';

@Injectable({
    providedIn: 'root'
})
export class AtmHistoryService {

    private _transactionHistory: TransactionHistory[] = [];
    private _transactionHistorySubject: BehaviorSubject<TransactionHistory[]> = new BehaviorSubject(null);

    constructor(
    ) { }

    public getTransactionHistory = (): Observable<TransactionHistory[]> => this._transactionHistorySubject.asObservable();
    public getUserTransactionHistoryUserType = (user: IUser): TransactionHistory[] => this._transactionHistory.filter((t: TransactionHistory) => {
        switch (user.userType) {
            case UserType.super: {
                return t.userType <= UserType.super
            }
            case UserType.admin: {
                return t.userType <= UserType.admin
            }
            case UserType.basic: {
                return t.userId === user.id
            }
        }

        return false;
    });

    public addHistory(transactionHistory: TransactionHistory): boolean {
        this._transactionHistory.push(transactionHistory);
        this._transactionHistorySubject.next(this._transactionHistory);

        return true;
    }
}
