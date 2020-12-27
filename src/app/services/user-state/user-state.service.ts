import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/interface/index.interface';
import { UserType } from 'src/app/enum/index.enum';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: IUser = undefined;
    private _userList: IUser[] = [];
    private _currentUserSubject: BehaviorSubject<IUser> = new BehaviorSubject(undefined);

    constructor() {
        this._userList = [
            { id: '52ec7d7a-9a06-4b33-a57d-7ff32fe6d48c', username: 'Doctor.Strange@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Strange', firstName: 'Doctor', accountBalance: 100 },
            { id: '44dbbd9a-e057-4a60-be06-811317c33635', username: 'Scott.Lang@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Lang', firstName: 'Scott', accountBalance: 2000 },
            { id: '4729b96a-3b54-4b1e-a010-1a7c04cd59f8', username: 'Tony.Stark@gmail.com', password: 'abc123!!', userType: UserType.admin, lastName: 'Stark', firstName: 'Tony', accountBalance: 1000000000 },
            { id: '01dc04b3-463b-4892-b8b1-15f4f5f92753', username: 'Bruce.Banner@gmail.com', password: 'abc123!!', userType: UserType.admin, lastName: 'Banner', firstName: 'Bruce', accountBalance: 500000 },
            { id: '4049f54a-43cd-435e-9312-9e2964bb3342', username: 'Steve.Rogers@gmail.com', password: 'abc123!!', userType: UserType.super, lastName: 'Rogers', firstName: 'Steve', accountBalance: 250000 },
            { id: '8e1f391b-c383-4f1b-87c9-cd2dd2a687e3', username: 'Natasha.Romanoff@gmail.com', password: 'abc123!!', userType: UserType.super, lastName: 'Romanoff', firstName: 'Natasha', accountBalance: 6500000 }
        ];
    }

    public getCurrentUserObs(): Observable<IUser> { return this._currentUserSubject.asObservable(); }
    public getCurrentUser(): IUser { return this._currentUser; }

    public processLogin(username: string, password: string): IUser {
        this._currentUser = this._userList.find((user) => user.username === username && user.password === password);
        if (!!this._currentUser) {
            this._currentUserSubject.next(this._currentUser);
            return this._currentUser;
        }

        return undefined;
    }

    public processLogout(): boolean {
        this._currentUser = undefined;
        this._currentUserSubject.next(this._currentUser);

        return true;
    }

    public processWithdrawl = (amount: number): void => {
        this._currentUser.accountBalance -= amount;
    }

    public withdrawlPossible = (amount: number): boolean => this._currentUser.accountBalance >= amount;
}
