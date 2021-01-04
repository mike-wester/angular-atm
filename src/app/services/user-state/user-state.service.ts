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
            { id: '3fedffaf-e90a-4935-95e7-46ff29886d11', username: 'Clint.Barton@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Barton', firstName: 'Clint', accountBalance: 125043 },
            { id: '1bc8eb6c-2a74-430a-ad4d-796e7152d687', username: 'Scott.Lang@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Lang', firstName: 'Scott', accountBalance: 12354 },
            { id: '2618da68-842c-4bf5-9214-63337f1ee8e6', username: 'Wanda.Maximoff@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Maximoff', firstName: 'Wanda', accountBalance: 65464 },
            { id: '602ce9df-0e23-41c2-8296-33997e2c20c5', username: 'Bucky.Barnes@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Barnes', firstName: 'Bucky', accountBalance: 34534533 },
            { id: '44dbbd9a-e057-4a60-be06-811317c33635', username: 'Peter.Quill@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Quill', firstName: 'Peter', accountBalance: 99999999999 },
            { id: 'ff30d5f0-075a-4d10-8639-8655dd96c0e9', username: 'Bruce.Banner@gmail.com', password: 'abc123!!', userType: UserType.admin, lastName: 'Banner', firstName: 'Bruce', },
            { id: 'f4706cea-1780-45fe-817a-dccfa3b429d7', username: 'Peter.Parker@gmail.com', password: 'abc123!!', userType: UserType.admin, lastName: 'Banner', firstName: 'Bruce', },
            { id: 'a5f6b15a-49e0-4246-b0a4-55f20a8c8cf0', username: 'Steve.Rogers@gmail.com', password: 'abc123!!', userType: UserType.super, lastName: 'Rogers', firstName: 'Steve' },
            { id: '1397a524-34b1-42a0-bbbb-98b3f5c78330', username: 'Doctor.Strange@gmail.com', password: 'abc123!!', userType: UserType.basic, lastName: 'Strange', firstName: 'Doctor' },
            { id: '4729b96a-3b54-4b1e-a010-1a7c04cd59f8', username: 'Tony.Stark@gmail.com', password: 'abc123!!', userType: UserType.admin, lastName: 'Stark', firstName: 'Tony' },
            { id: '958e1baa-0293-4fc1-94c4-c1a174bf83ca', username: 'Natasha.Romanoff@gmail.com', password: 'abc123!!', userType: UserType.super, lastName: 'Romanoff', firstName: 'Natasha' }
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

    public processWithdrawal = (amount: number): void => {
        this._currentUser.accountBalance -= amount;
    }

    public withdrawalPossible = (amount: number): boolean => this._currentUser.accountBalance >= amount;
}
