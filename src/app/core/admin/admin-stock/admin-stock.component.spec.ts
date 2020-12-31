import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockComponent } from './admin-stock.component';

describe('AdminStockComponent', () => {
  let component: AdminStockComponent;
  let fixture: ComponentFixture<AdminStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
