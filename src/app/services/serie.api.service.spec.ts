import { TestBed } from '@angular/core/testing';

import { SerieApiService } from './serie.api.service';

describe('SerieApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieApiService = TestBed.get(SerieApiService);
    expect(service).toBeTruthy();
  });
});
