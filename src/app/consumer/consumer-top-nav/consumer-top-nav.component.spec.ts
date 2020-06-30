import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerTopNavComponent } from './consumer-top-nav.component';

describe('ConsumerTopNavComponent', () => {
  let component: ConsumerTopNavComponent;
  let fixture: ComponentFixture<ConsumerTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
