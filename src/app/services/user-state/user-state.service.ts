import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/interface/index.interface';
import { UserType } from 'src/app/enum/index.enum';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: User = undefined;
    private _userList: User[] = [];
    private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(undefined);

    constructor() {
        this._userList = [
            { id: '52ec7d7a-9a06-4b33-a57d-7ff32fe6d48c', username: 'Doctor.Strange@gmail.com', password: 'abc123!!', userType: UserType.basic, firstName: 'Strange', lastName: 'Doctor', accountBalance: 1000000 },
            { id: '44dbbd9a-e057-4a60-be06-811317c33635', username: 'Scott.Lang@gmail.com', password: 'abc123!!', userType: UserType.basic, firstName: 'Lang', lastName: 'Scott', accountBalance: 2000 },
            { id: '4729b96a-3b54-4b1e-a010-1a7c04cd59f8', username: 'Tony.Stark@gmail.com', password: 'abc123!!', userType: UserType.admin, firstName: 'Stark', lastName: 'Tony', accountBalance: 1000000000 },
            { id: '01dc04b3-463b-4892-b8b1-15f4f5f92753', username: 'Bruce.Banner@gmail.com', password: 'abc123!!', userType: UserType.admin, firstName: 'Banner', lastName: 'Bruce', accountBalance: 500000 },
            { id: '4049f54a-43cd-435e-9312-9e2964bb3342', username: 'Steve.Rogers@gmail.com', password: 'abc123!!', userType: UserType.super, firstName: 'Rogers', lastName: 'Steve', accountBalance: 250000 },
            { id: '8e1f391b-c383-4f1b-87c9-cd2dd2a687e3', username: 'Natasha.Romanoff@gmail.com', password: 'abc123!!', userType: UserType.super, firstName: 'Romanoff', lastName: 'Natasha', accountBalance: 6500000 }
        ];
    }

    public getCurrentUser(): Observable<User> { return this._currentUserSubject.asObservable(); }

    public processLogin(username: string, password: string): boolean {
        this._currentUser = this._userList.find((user) => user.username === username && user.password === password);
        if (!!this._currentUser) {
            this._currentUserSubject.next(this._currentUser);
            return true;
        }

        return false;
    }

    public processLogout(): boolean {
        this._currentUser = undefined;
        this._currentUserSubject.next(this._currentUser);

        return true;
    }
}
