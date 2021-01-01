import { UserType } from "src/app/enum/index.enum";

export interface ITransactionHistory {
    userId?: string,
    userType?: UserType,
    type: string,
    message: string,
    date?: Date
}
