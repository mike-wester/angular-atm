import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestockComponent } from './admin-restock.component';

describe('AdminRestockComponent', () => {
  let component: AdminRestockComponent;
  let fixture: ComponentFixture<AdminRestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
