import { UserType } from 'src/app/enum/index.enum';

export interface User {
    id: string,
    username: string,
    password: string,
    userType: UserType,
    firstName?: string,
    lastName?: string,
    accountBalance?: number
}
