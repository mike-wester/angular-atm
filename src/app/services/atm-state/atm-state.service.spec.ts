import { TestBed } from '@angular/core/testing';

import { AtmStateService } from './atm-state.service';

describe('AtmStateService', () => {
  let service: AtmStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
