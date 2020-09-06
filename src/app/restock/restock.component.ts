import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from '../../services/atm-history/atm-history.service';
import { AtmStateService } from '../../services/atm-state/atm-state.service';
import { CurrencyValue } from '../../enum/currency-value.enum';

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
  ) { 
    this.restockForm = new FormGroup({
      amountHundread: new FormControl(0, Validators.min(0)),
      amountFifty: new FormControl(0, Validators.min(0)),
      amountTwenty: new FormControl(0, Validators.min(0)),
      amountFive: new FormControl(0, Validators.min(0)),
      amountOne: new FormControl(0, Validators.min(0))
    });
  }

  ngOnInit(): void {
  }

  restock(): void {
    this.atmStateService.addStock(CurrencyValue.hundread, this.restockForm.controls['amountHundread'].value);
    this.atmStateService.addStock(CurrencyValue.fifty, this.restockForm.controls['amountFifty'].value);
    this.atmStateService.addStock(CurrencyValue.twenty, this.restockForm.controls['amountTwenty'].value);
    this.atmStateService.addStock(CurrencyValue.five, this.restockForm.controls['amountFive'].value);
    this.atmStateService.addStock(CurrencyValue.dollar, this.restockForm.controls['amountOne'].value);
  }
}
