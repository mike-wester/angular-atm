import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/interface/index.interface';
import { UserType } from 'src/app/enum/index.enum';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: User = null;
    private _currentUserList: User[] = [];
    private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor() {
        this._currentUserList = [
            { username: 'Doctor.Strange@gmail.com', password: 'abc123!!', userType: UserType.basic, firstName: 'Strange', lastName: 'Doctor' },
            { username: 'Scott.Lang@gmail.com', password: 'abc123!!', userType: UserType.basic, firstName: 'Lang', lastName: 'Scott' },
            { username: 'Tony.Stark@gmail.com', password: 'abc123!!', userType: UserType.admin, firstName: 'Stark', lastName: 'Tony' },
            { username: 'Bruce.Banner@gmail.com', password: 'abc123!!', userType: UserType.admin, firstName: 'Banner', lastName: 'Bruce' },
            { username: 'Steve.Rogers@gmail.com', password: 'abc123!!', userType: UserType.super, firstName: 'Rogers', lastName: 'Steve' },
            { username: 'Natasha.Romanoff@gmail.com', password: 'abc123!!', userType: UserType.super, firstName: 'Romanoff', lastName: 'Natasha' }
        ];
    }

    public getCurrentUser(): Observable<User> { return this._currentUserSubject.asObservable(); }

    public processLogin(username: string, password: string): boolean {
        if (username !== null && password !== null && this._currentUserList.filter((user) => user.username === username && user.password === password).length === 1) {
            this._currentUser = this._currentUserList.filter((user) => user.username === username && user.password === password)[0];
            this._currentUserSubject.next(this._currentUser);
            return true;
        }

        return false;
    }
}
