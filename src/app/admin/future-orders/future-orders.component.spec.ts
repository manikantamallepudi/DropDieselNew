import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureOrdersComponent } from './future-orders.component';

describe('FutureOrdersComponent', () => {
  let component: FutureOrdersComponent;
  let fixture: ComponentFixture<FutureOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
