import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from '../../services/atm-history/atm-history.service';
import { AtmStateService } from '../../services/atm-state/atm-state.service';
import { CurrencyValue } from '../../enum/currency-value.enum';
import { TransactionHistoryType } from '../../enum/transaction-history-type.enum';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

  public restockForm: FormGroup;
  public restockSuccessFull: boolean = false;

  constructor(
    private atmHistoryService: AtmHistoryService,
    public atmStateService: AtmStateService
  ) { }

  ngOnInit(): void {
    this.restockForm = new FormGroup({
      amountHundread: new FormControl(0, Validators.min(0)),
      amountFifty: new FormControl(0, Validators.min(0)),
      amountTwenty: new FormControl(0, Validators.min(0)),
      amountFive: new FormControl(0, Validators.min(0)),
      amountOne: new FormControl(0, Validators.min(0))
    });
  }

  public restock(): void {
    this.updateInventory();
    this.logHistory();
    this.reset();
  }

  private logHistory(): void {
    this.atmHistoryService.addHistory({ 
      type: TransactionHistoryType[TransactionHistoryType.restock], 
      message: 'Hundreads restocked: ' + this.restockForm.controls['amountHundread'].value + ' ' + 
               'Fifties restocked: ' + this.restockForm.controls['amountFifty'].value + ' ' + 
               'Twenties restocked: ' + this.restockForm.controls['amountTwenty'].value +  ' ' + 
               'Fives restocked: ' + this.restockForm.controls['amountFive'].value +  ' ' + 
               'Dolalrs restocked: ' + this.restockForm.controls['amountOne'].value,
      date: new Date() 
    });
  } 

  private reset(): void {
    this.restockForm.controls['amountHundread'].setValue(0);
    this.restockForm.controls['amountFifty'].setValue(0);
    this.restockForm.controls['amountTwenty'].setValue(0);
    this.restockForm.controls['amountFive'].setValue(0);
    this.restockForm.controls['amountOne'].setValue(0);
  }

  private updateInventory(): void {
    this.atmStateService.addStock(CurrencyValue.hundread, this.restockForm.controls['amountHundread'].value);
    this.atmStateService.addStock(CurrencyValue.fifty, this.restockForm.controls['amountFifty'].value);
    this.atmStateService.addStock(CurrencyValue.twenty, this.restockForm.controls['amountTwenty'].value);
    this.atmStateService.addStock(CurrencyValue.five, this.restockForm.controls['amountFive'].value);
    this.atmStateService.addStock(CurrencyValue.dollar, this.restockForm.controls['amountOne'].value);
  }
}
