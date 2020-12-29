import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestockComponent } from './restock.component';

describe('RestockComponent', () => {
    let component: RestockComponent;
    let fixture: ComponentFixture<RestockComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [RestockComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RestockComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
