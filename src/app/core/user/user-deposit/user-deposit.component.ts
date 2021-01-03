import { Component } from '@angular/core';
import { RestockInventoryComponent } from 'src/app/components/restock-inventory/restock-inventory.component'

@Component({
    selector: 'app-deposit',
    templateUrl: './user-deposit.component.html',
    styleUrls: ['./user-deposit.component.scss']
})
export class UserDepositComponent extends RestockInventoryComponent {

    public deposit(): void {
        this.depositSuccessFull = this.validateDeposit();
        if (this.depositSuccessFull) {
            this.updateAccount();
        }

        super.deposit();
    }

    private updateAccount(): void {
        this._userStateService.getCurrentUser().accountBalance += this.depositForm.controls['amountDeposit'].value
    }
}
