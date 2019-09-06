import { TestBed } from '@angular/core/testing';

import { LispService } from './lisp.service';

describe('LispService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LispService = TestBed.get(LispService);
    expect(service).toBeTruthy();
  });
});
