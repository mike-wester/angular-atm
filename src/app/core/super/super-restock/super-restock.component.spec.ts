import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRestockComponent } from './super-restock.component';

describe('SuperRestockComponent', () => {
  let component: SuperRestockComponent;
  let fixture: ComponentFixture<SuperRestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperRestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperRestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
