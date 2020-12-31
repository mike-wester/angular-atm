import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHistoryComponent } from './super-history.component';

describe('SuperHistoryComponent', () => {
  let component: SuperHistoryComponent;
  let fixture: ComponentFixture<SuperHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
