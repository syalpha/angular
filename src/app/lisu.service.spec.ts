import { TestBed } from '@angular/core/testing';

import { LisuService } from './listeu/lisu.service';

describe('LisuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LisuService = TestBed.get(LisuService);
    expect(service).toBeTruthy();
  });
});
