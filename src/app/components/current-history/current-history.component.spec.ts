import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHistoryComponent } from './current-history.component';

describe('CurrentHistoryComponent', () => {
  let component: CurrentHistoryComponent;
  let fixture: ComponentFixture<CurrentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
