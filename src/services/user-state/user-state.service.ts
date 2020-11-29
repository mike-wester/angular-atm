import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/interface/index.interface';
import { UserType } from 'src/enum/index.enum';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: User = null;
    private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);

    constructor() { }

    public getCurrentUser(): Observable<User> { return this._currentUserSubject.asObservable(); }

    public processLogin(username: string, password: string): boolean {
        if (username !== null && password !== null) {
            this._currentUser = {
                username: username,
                password: password,
                firstname: 'Blah',
                lastname: 'DeBlah'
            }
            this._currentUserSubject.next(this._currentUser);

            return true;
        }

        return false;
    }
}
