import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from 'src/app/interface/index.interface';
import { environment } from 'src/environments/environment';

// Mock data
import userlist from 'src/mockdata/userList.json';

@Injectable({
    providedIn: 'root'
})
export class UserStateService {

    private _currentUser: IUser;
    private _userList: IUser[] = [];
    private _currentUserSubject: ReplaySubject<IUser> = new ReplaySubject(1);

    constructor(
        private http: HttpClient
    ) {
        if (environment.useMockData) {
            this._userList = userlist;
        } else {
            this.loadCurrentUsers().subscribe();
        }
    }

    public getCurrentUserObs(): Observable<IUser> { return this._currentUserSubject.asObservable(); }
    public getCurrentUser(): IUser { return this._currentUser; }

    public isLoggedIn(): boolean { return !!this._currentUser };

    public processLogin(username: string, password: string): IUser {
        this._currentUser = this._userList.find((user) => user.username.toLocaleLowerCase() == username.toLocaleLowerCase() && user.password == password);
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

    public processWithdrawal = (amount: number): void => {
        this._currentUser.accountBalance -= amount;
    }

    public withdrawalPossible = (amount: number): boolean => this._currentUser.accountBalance >= amount;

    private loadCurrentUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(environment.baseMockUrl + 'userList')
            .pipe(
                tap((resp) => {
                    this._userList = resp
                })
            );
    }
}
