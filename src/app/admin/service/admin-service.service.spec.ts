import { TestBed } from '@angular/core/testing';

import { AdminServices as AdminServices } from './admin-service.service';

describe('AdminServiceService', () => {
  let service: AdminServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
