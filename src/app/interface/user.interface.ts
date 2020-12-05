import { UserType } from 'src/app/enum/index.enum';

export interface User {
    username: string,
    password: string,
    userType: UserType,
    firstName?: string,
    lastName?: string,
    accountBalance?: number
}
