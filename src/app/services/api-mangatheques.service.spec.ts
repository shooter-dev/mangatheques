import { TestBed } from '@angular/core/testing';

import { ApiMangathequesService } from './api-mangatheques.service';

describe('ApiMangathequesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMangathequesService = TestBed.get(ApiMangathequesService);
    expect(service).toBeTruthy();
  });
});
