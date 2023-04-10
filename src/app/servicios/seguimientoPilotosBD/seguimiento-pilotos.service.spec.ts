import { TestBed } from '@angular/core/testing';

import { SeguimientoPilotosService } from './seguimiento-pilotos.service';

describe('SeguimientoPilotosService', () => {
  let service: SeguimientoPilotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoPilotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
