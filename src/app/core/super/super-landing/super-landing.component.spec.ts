import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLandingComponent } from './super-landing.component';

describe('SuperLandingComponent', () => {
  let component: SuperLandingComponent;
  let fixture: ComponentFixture<SuperLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
