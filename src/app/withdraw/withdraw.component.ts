import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtmHistoryService } from '../../services/atm-history/atm-history.service';
import { AtmStateService } from '../../services/atm-state/atm-state.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  public withdrawForm: FormGroup;
  public withdrawlSuccessFull: Boolean = null

  constructor(
    private atmStateService: AtmStateService
  ) { }

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      withdrawlAmount: new FormControl(0, Validators.min(0))
    });
  }

  public processWithdrawl(): void {
    this.withdrawlSuccessFull = this.atmStateService.processWithdrawl(this.withdrawForm.controls['withdrawlAmount'].value)
  }
}
