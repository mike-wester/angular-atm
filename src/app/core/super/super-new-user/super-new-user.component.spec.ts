import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNewUserComponent } from './super-new-user.component';

describe('SuperNewUserComponent', () => {
  let component: SuperNewUserComponent;
  let fixture: ComponentFixture<SuperNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperNewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
