import { TestBed } from '@angular/core/testing';

import { CallRateApiService } from './call-rate-api.service';

describe('CallRateApiService', () => {
  let service: CallRateApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallRateApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
