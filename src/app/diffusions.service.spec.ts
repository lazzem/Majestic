import { TestBed } from '@angular/core/testing';

import { DiffusionsService } from './diffusions.service';

describe('DiffusionsService', () => {
  let service: DiffusionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffusionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
