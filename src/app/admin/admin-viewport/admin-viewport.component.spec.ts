import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewportComponent } from './admin-viewport.component';

describe('AdminViewportComponent', () => {
  let component: AdminViewportComponent;
  let fixture: ComponentFixture<AdminViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
