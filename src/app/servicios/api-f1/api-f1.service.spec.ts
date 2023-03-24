import { TestBed } from '@angular/core/testing';

import { ApiF1Service } from './api-f1.service';

describe('ApiF1Service', () => {
  let service: ApiF1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiF1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
