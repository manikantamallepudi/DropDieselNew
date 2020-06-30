import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSideNavComponent } from './consumer-side-nav.component';

describe('ConsumerSideNavComponent', () => {
  let component: ConsumerSideNavComponent;
  let fixture: ComponentFixture<ConsumerSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
