import { TestBed } from '@angular/core/testing';

import { AjoutService } from './ajout-p/ajout.service';

describe('AjoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutService = TestBed.get(AjoutService);
    expect(service).toBeTruthy();
  });
});
