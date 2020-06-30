import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerViewportComponent } from './consumer-viewport.component';

describe('ConsumerViewportComponent', () => {
  let component: ConsumerViewportComponent;
  let fixture: ComponentFixture<ConsumerViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
