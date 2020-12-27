import { ITransactionHistory } from 'src/app/interface/index.interface';

export class TransactionHistory implements ITransactionHistory {

    public userId?: string;
    public type: string;
    public message: string;
    public date?: Date;

    constructor(input: ITransactionHistory) {

        this.userId = input.userId || '00000000-0000-0000-0000-000000000000';
        this.type = input.type;
        this.message = input.message;
        this.date = input.date || new Date();

    }
}
