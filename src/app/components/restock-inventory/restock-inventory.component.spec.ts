import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestockInventoryComponent } from './restock-inventory.component';

describe('RestockInventoryComponent', () => {
  let component: RestockInventoryComponent;
  let fixture: ComponentFixture<RestockInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestockInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
