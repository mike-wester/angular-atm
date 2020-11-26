import { Component, OnInit } from '@angular/core';
import { AtmStateService } from 'src/services/atm-state/atm-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public atmStateService: AtmStateService
  ) { }

  ngOnInit(): void {

  }
}
