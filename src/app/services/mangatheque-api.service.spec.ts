import { TestBed } from '@angular/core/testing';

import { MangathequeApiService } from './mangatheque-api.service';

describe('MangathequeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangathequeApiService = TestBed.get(MangathequeApiService);
    expect(service).toBeTruthy();
  });
});
