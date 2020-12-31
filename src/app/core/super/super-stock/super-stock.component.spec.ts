import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStockComponent } from './super-stock.component';

describe('SuperStockComponent', () => {
  let component: SuperStockComponent;
  let fixture: ComponentFixture<SuperStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
