import { TestBed } from '@angular/core/testing';

import { AtmHistoryService } from './atm-history.service';

describe('AtmHistoryService', () => {
  let service: AtmHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
